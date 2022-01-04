# SVG Symbol Sprite [![npm][npm-version-img]][npm-version-url] [![MIT license][license-img]][license-url] [![Twitter][twitter-img]][twitter-url] [![Analytics][analytics-img]][analytics-url]

> Create an SVG symbol sprite from your SVG files.

[![All issues on Github][github-issues-img]][github-issues-url]
[![Open issues on Github][github-open-issues-img]][github-open-issues-url]
[![Closed issues on Github][github-closed-issues-img]][github-closed-issues-url]
[![Latest Github gag][github-tag-img]][github-tag-url]
[![GitHub last commit][last-commit-img]][last-commit-url]

[![Weekly downloads on NPM][npm-downloads-weekly-img]][npm-url]
[![Monthly downloads on NPM][npm-downloads-monthly-img]][npm-url]
[![Yearly downloads on NPM][npm-downloads-yearly-img]][npm-url]
[![Total downloads on NPM][npm-downloads-total-img]][npm-url]

[![Githib build status][github-status-img]][github-status-url]
[![Combined Github checks][github-checks-img]][github-checks-url]
![Publish size][publish-size-img]
![Top language][github-top-language-img]
![Used languages count][github-languages-img]
[![Renovate App Status][renovateapp-img]][renovateapp-url]
[![Make A Pull Request][prs-welcome-img]][prs-welcome-url]

A Node.js CLI tool which creates an optimized SVG symbol sprite out of a folder full of SVG files.

Provides handy defaults so you don't have to waste time.

All available options can be tweaked. You can even supply your own SVGO config.

**This tool is heavily inspried by [sprite.sh](https://github.com/edenspiekermann/sprite.sh)**

## Installation

```sh
npm i svg-symbol-sprite -g

# or

yarn global add svg-symbol-sprite
```

## Options

| Argument          | Description                                            |
| ----------------- | ------------------------------------------------------ |
| `-i`, `--input`   | Specifies input dir (current dir by default)           |
| `-o`, `--output`  | Specifies output file ("./sprite.svg" by default)      |
| `-v`, `--viewbox` | Specifies viewBox attribute (parsed by default)        |
| `-p`, `--prefix`  | Specifies prefix for id attribute ("icon-" by default) |
| `-c`, `--config`  | Absolute path to the SVGO config file                  |

```sh
Usage: svg-symbol-sprite [options]

Options:
    -i, --input     Specifies input dir (current dir by default)
    -o, --output    Specifies output file ("./sprite.svg" by default)
    -v, --viewbox   Specifies viewBox attribute (parsed by default)
    -p, --prefix    Specifies prefix for id attribute ("icon-" by default)
    -c, --config    Absolute path to the SVGO config file
```

## Usage as a package.json script

The tool can be also used as a `package.json` script. You need to add it to the `devDependencies` of your project's `package.json`.

```json
{
	"scripts": {
		"svg-sprite": "svg-symbol-sprite -i ./assets/svgs -o ./dist/sprite.svg"
	}
}
```

```sh
npm run svg-sprite

# or

yarn svg-sprite
```

## Usage without installation (with `npx`)

The tool can be also used without installing it:

```sh
npx svg-symbol sprite -i ./assets/svgs -o ./dist/sprite.svg
```

## SVG Optimization

`svg-symbol-sprite` optimizes the input SVG files using [SVGO](https://github.com/svg/svgo) and an opinionated configuration file. In order to customize the SVGO config, one can do so by using the `-c` or `--config` option and an absolute path to the SVGO config file.

## Accessibility

`svg-symbol-sprite` does not help with SVG icons' accessibility. This is your responsibility as a developer - you should make sure that your SVGs contain relevant `title` and `id` attributes.

## Support this project

[![Tweet][tweet-img]][tweet-url]
[![Donate on PayPal][paypal-img]][paypal-url]
[![Become a Patron][patreon-img]][patreon-url]
[![Buy Me A Coffee][ko-fi-img]][ko-fi-url]
[![Donate on Liberapay][liberapay-img]][liberapay-url]
[![Donate on Issuehunt][issuehunt-img]][issuehunt-url]

## LICENSE

[MIT][license-url]

[npm-version-img]: https://badgen.net/npm/v/svg-symbol-sprite?icon=npm
[npm-version-url]: https://www.npmjs.com/package/svg-symbol-sprite
[license-img]: https://badgen.net/npm/license/svg-symbol-sprite
[license-url]: https://github.com/scriptex/svg-symbol-sprite/blob/master/LICENSE
[twitter-url]: https://twitter.com/scriptexbg
[twitter-img]: https://badgen.net/twitter/follow/scriptexbg?icon=twitter&color=1da1f2&cache=300
[github-tag-img]: https://badgen.net/github/tag/scriptex/svg-symbol-sprite?icon=github
[github-tag-url]: https://github.com/scriptex/svg-symbol-sprite/releases/latest
[github-checks-img]: https://badgen.net/github/checks/scriptex/svg-symbol-sprite?icon=github
[github-checks-url]: https://github.com/scriptex/svg-symbol-sprite
[github-issues-img]: https://badgen.net/github/issues/scriptex/svg-symbol-sprite?icon=github
[github-issues-url]: https://github.com/scriptex/svg-symbol-sprite/issues
[github-open-issues-img]: https://badgen.net/github/open-issues/scriptex/svg-symbol-sprite?icon=github
[github-open-issues-url]: https://github.com/scriptex/svg-symbol-sprite/issues?q=is%3Aopen+is%3Aissue
[github-closed-issues-img]: https://badgen.net/github/closed-issues/scriptex/svg-symbol-sprite?icon=github
[github-closed-issues-url]: https://github.com/scriptex/svg-symbol-sprite/issues?q=is%3Aissue+is%3Aclosed
[last-commit-img]: https://badgen.net/github/last-commit/scriptex/svg-symbol-sprite?icon=github
[last-commit-url]: https://github.com/scriptex/svg-symbol-sprite/commits/master
[analytics-img]: https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/svg-symbol-sprite/README.md
[analytics-url]: https://github.com/scriptex/svg-symbol-sprite/
[npm-downloads-weekly-img]: https://badgen.net/npm/dw/svg-symbol-sprite?icon=npm
[npm-downloads-monthly-img]: https://badgen.net/npm/dm/svg-symbol-sprite?icon=npm
[npm-downloads-yearly-img]: https://badgen.net/npm/dy/svg-symbol-sprite?icon=npm
[npm-downloads-total-img]: https://badgen.net/npm/dt/svg-symbol-sprite?icon=npm
[npm-url]: https://www.npmjs.com/package/svg-symbol-sprite
[tweet-img]: https://img.shields.io/badge/Tweet-Share_this_repository-blue.svg?style=flat-square&logo=twitter&color=38A1F3
[tweet-url]: https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20software%20project%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex%2Fsvg-symbol-sprite&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome
[paypal-img]: https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?style=flat-square&logo=paypal&color=222d65
[paypal-url]: https://www.paypal.me/scriptex
[patreon-img]: https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?style=flat-square&logo=patreon&color=e64413
[patreon-url]: https://www.patreon.com/atanas
[ko-fi-img]: https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi
[ko-fi-url]: https://ko-fi.com/scriptex
[liberapay-img]: https://img.shields.io/liberapay/receives/scriptex.svg?logo=liberapay
[liberapay-url]: https://liberapay.com/scriptex
[issuehunt-img]: https://raw.githubusercontent.com/BoostIO/issuehunt-materials/master/v1/issuehunt-shield-v1.svg
[issuehunt-url]: https://issuehunt.io/r/scriptex/svg-symbol-sprite
[publish-size-img]: https://badgen.net/packagephobia/publish/svg-symbol-sprite
[renovateapp-img]: https://badgen.net/badge/renovate/enabled/green?cache=300
[renovateapp-url]: https://renovatebot.com
[prs-welcome-img]: https://badgen.net/badge/PRs/welcome/green?cache=300
[prs-welcome-url]: https://github.com/scriptex/svg-symbol-sprite/pulls
[github-status-img]: https://badgen.net/github/status/scriptex/svg-symbol-sprite?icon=github
[github-status-url]: https://github.com/scriptex/svg-symbol-sprite/actions/workflows/build.yml
[github-languages-img]: https://img.shields.io/github/languages/count/scriptex/svg-symbol-sprite
[github-top-language-img]: https://img.shields.io/github/languages/top/scriptex/svg-symbol-sprite
