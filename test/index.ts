import { resolve } from 'node:path';
import { readdir, readFile } from 'node:fs/promises';
import { exec, ExecException } from 'node:child_process';

import test, { Test } from 'tape';
import { parse, ElementNode } from 'svg-parser';

const command = async (args: string): Promise<ElementNode | ExecException> =>
	new Promise((onSuccess, onError) => {
		exec(`yarn build && node dist/index.js -i assets -o example/sprite.svg ${args}`, async error => {
			if (error) {
				return onError(error);
			}

			const svg = await readFile(resolve('example', 'sprite.svg'), 'utf-8');
			const parsed = parse(svg);

			return onSuccess(parsed.children[0] as ElementNode);
		});
	});

test('Create SVG sprite with default settings', async (t: Test) => {
	const symbols = await readdir(resolve('assets'));
	const result = await command('').catch(e => e);

	if ('code' in result) {
		t.fail(`An error occurred: ${result.message}`);

		return;
	} else {
		const { children, properties } = result as ElementNode;

		t.equal(properties?.xmlns, 'http://www.w3.org/2000/svg', 'Should have the default SVG namespace');

		t.equal(properties?.['aria-hidden'], 'true', 'Should have the "aria-hidden" attribute set to true');

		t.equal(
			properties?.style,
			'width: 0; height: 0; position: absolute;',
			'Should have the default style attribute'
		);

		t.equal(symbols.length, children.length, `Should have ${symbols.length} symbols`);
	}
});

test('Create SVG sprite with no attributes and no style', async (t: Test) => {
	const symbols = await readdir(resolve('assets'));
	const result = await command('-p svg- -a "" -s ""');

	if ('code' in result) {
		t.fail(`An error occurred: ${result.message}`);

		return;
	} else {
		const { children, properties } = result as ElementNode;

		t.equal(properties?.xmlns, undefined, 'Should have no default namespace SVG');

		t.equal(properties?.['aria-hidden'], undefined, 'Should have no "aria-hidden" attribute');

		t.equal(properties?.style, '', 'Should have an empty "style" attribute');

		for (let i = 0; i < children.length; i++) {
			const child = children[i] as ElementNode;
			const id = child.properties?.id as string | undefined;
			const name = symbols[i].split('.')[0];

			t.equal(id, `svg-${name}`, `The ID of the ${name} icon is set correctly`);
		}
	}
});

test('Create SVG sprite with custom attributes and custom style', async (t: Test) => {
	const attrs = 'aria-label="SVGSymbolSprite" data-svg-sprite="true"';
	const symbols = await readdir(resolve('assets'));
	const result = await command(`-p svg- -a ${attrs} -s "display: none;"`);

	if ('code' in result) {
		t.fail(`An error occurred: ${result.message}`);

		return;
	} else {
		const { children, properties } = result as ElementNode;

		t.equal(properties?.xmlns, undefined, 'Should have no default namespace SVG');

		t.equal(properties?.['aria-label'], 'SVGSymbolSprite', 'Should have an "aria-label" attribute');

		t.equal(properties?.style, 'display: none;', 'Should have a custom "style" attribute');

		for (let i = 0; i < children.length; i++) {
			const child = children[i] as ElementNode;
			const id = child.properties?.id as string | undefined;
			const name = symbols[i].split('.')[0];

			t.equal(id, `svg-${name}`, `The ID of the ${name} icon is set correctly`);
		}
	}
});
