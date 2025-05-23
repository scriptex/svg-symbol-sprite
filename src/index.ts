#!/usr/bin/env node

import { existsSync, promises as fs } from 'fs';
import { join, extname, resolve, basename } from 'path';

import * as cheerio from 'cheerio';
import { Command } from 'commander';
import { optimize, loadConfig, Config } from 'svgo';

const { rm, readdir, readFile, writeFile } = fs;

const cli = new Command();

const SVG_PROPS = 'xmlns="http://www.w3.org/2000/svg" aria-hidden="true"';
const SVG_STYLE = 'width: 0; height: 0; position: absolute;';
const DEFAULT_CONFIG = join(__dirname, '..', 'config', 'svgo.config.js');

const CHEERIO_OPTIONS: cheerio.CheerioOptions = {
	xml: {
		lowerCaseTags: true,
		lowerCaseAttributeNames: true
	}
};

cli.option('-i, --input [input]', 'Specifies input dir (current dir by default)', '.')
	.option('-o, --output [output]', 'Specifies output file ("./sprite.svg" by default)', 'sprite.svg')
	.option('-v, --viewbox [viewbox]', 'Specifies viewBox attribute (parsed by default)', '')
	.option('-p, --prefix [prefix]', 'Specifies prefix for id attribute ("icon-" by default)', 'icon-')
	.option('-c, --config [config]', 'Absolute path to the SVGO config file or "false"', './config/svgo.config.js')
	.option('-a, --attrs [attributes]', 'Attributes for the SVG element', SVG_PROPS)
	.option('-s, --style [style]', 'Inline style for the SVG element', SVG_STYLE)
	.parse(process.argv);

type OptionValues = {
	input: string;
	output: string;
	viewbox: string;
	prefix: string;
	config: string | 'false';
	attrs: string;
	style: string;
};

const {
	input: INPUT,
	output: OUTPUT,
	viewbox: VIEWBOX,
	prefix: PREFIX,
	config: CONFIG,
	attrs: ATTRS,
	style: STYLE
} = cli.opts<OptionValues>();

const onEnd = (): void => console.log(`File ‘${OUTPUT}’ successfully generated.`);
const getSvg = (content: string) => cheerio.load(content, CHEERIO_OPTIONS)('svg').first();
const filterFile = (file: string) => extname(file) === '.svg';
const processFiles = (files: string[]) => Promise.all(files.map(processFile));
const removeOutput = async () => (existsSync(OUTPUT) ? await rm(OUTPUT) : undefined);
const getSvgContent = (content: string) => getSvg(content).html();
const readSrcFolder = () => readdir(INPUT);
const writeDestFile = (content: string) => writeFile(OUTPUT, content, 'utf8');
const getSpriteContent = (contents: string[]) => {
	return `<${['svg', ATTRS, `style="${STYLE}"`].join(' ').replace('style=""', '').trim()}>${contents.join('')}</svg>`;
};
const getSymbol = (content: string, attrs: Record<string, unknown>) => {
	return `<symbol${getAttributes(attrs)}>${getSvgContent(content)}</symbol>`;
};

const getAttributes = (attrs: Record<string, unknown>) =>
	Object.keys(attrs).reduce((acc, key) => {
		const value = attrs[key];

		return value ? `${acc} ${key}="${value}"` : acc;
	}, '');

const wrapFile = (fileName: string, content: string) => {
	const attrs = {
		id: (PREFIX + fileName).replace(/\s/g, '-'),
		viewBox: VIEWBOX || getSvg(content).attr('viewbox'),
		preserveAspectRatio: getSvg(content).attr('preserveaspectratio')
	};

	return getSymbol(content, attrs);
};

const getName = (file: string) => basename(file, extname(file));

const processFile = (file: string) => {
	const path = resolve(INPUT, file);
	const name = getName(file);
	const wrapContent = wrapFile.bind(null, name);

	return readFile(path, 'utf8').then(wrapContent);
};

const onError = (err: Error) => {
	throw err;
};

removeOutput()
	.then(readSrcFolder)
	.then(async (files: string[]) => {
		const matchingFiles = files.filter(filterFile);

		if (CONFIG === 'false') {
			return processFiles(matchingFiles);
		}

		let svgoConfig: Config = await loadConfig(DEFAULT_CONFIG);

		try {
			svgoConfig = await loadConfig(CONFIG);
		} catch (e: any) {
			console.log('SVG Symbol Sprite: SVGO configuration file not found. Using default SVGO configuration.');
		}

		const processedFiles = [];

		for (const file of matchingFiles) {
			const content = await fs.readFile(join(INPUT, file), {
				encoding: 'utf-8'
			});
			const name = getName(file);
			const optimizedSVG = optimize(content, svgoConfig).data;

			processedFiles.push(wrapFile(name, optimizedSVG));
		}

		return processedFiles;
	})
	.then(getSpriteContent)
	.then(writeDestFile)
	.then(onEnd)
	.catch(onError);
