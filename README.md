[![Github Build](https://github.com/scriptex/svg-symbol-sprite/workflows/Build/badge.svg)](https://github.com/scriptex/svg-symbol-sprite/actions?query=workflow%3ABuild)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/34d3d75710534dc6a38c3584a1dcd068)](https://www.codacy.com/gh/scriptex/svg-symbol-sprite/dashboard?utm_source=github.com&utm_medium=referral&utm_content=scriptex/svg-symbol-sprite&utm_campaign=Badge_Grade)
[![Codebeat Badge](https://codebeat.co/badges/d765a4c8-2c0e-44f2-89c3-fa364fdc14e6)](https://codebeat.co/projects/github-com-scriptex-svg-symbol-sprite-master)
[![CodeFactor Badge](https://www.codefactor.io/repository/github/scriptex/svg-symbol-sprite/badge)](https://www.codefactor.io/repository/github/scriptex/svg-symbol-sprite)
[![DeepScan grade](https://deepscan.io/api/teams/3574/projects/5257/branches/40799/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=3574&pid=5257&bid=40799)
[![Analytics](https://ga-beacon-361907.ew.r.appspot.com/UA-83446952-1/github.com/scriptex/svg-symbol-sprite/README.md?pixel)](https://github.com/scriptex/svg-symbol-sprite/)

# SVG Symbol Sprite

> Create an SVG symbol sprite from your SVG files.

![GitHub stars](https://img.shields.io/github/stars/scriptex/svg-symbol-sprite?style=social)
![GitHub forks](https://img.shields.io/github/forks/scriptex/svg-symbol-sprite?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/scriptex/svg-symbol-sprite?style=social)
![GitHub followers](https://img.shields.io/github/followers/scriptex?style=social)

## Code stats

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/scriptex/svg-symbol-sprite)
![GitHub repo size](https://img.shields.io/github/repo-size/scriptex/svg-symbol-sprite?style=plastic)
![GitHub language count](https://img.shields.io/github/languages/count/scriptex/svg-symbol-sprite?style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/scriptex/svg-symbol-sprite?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/svg-symbol-sprite?style=plastic)

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

| Argument          | Description                                      | Default value                              |
| ----------------- | ------------------------------------------------ | ------------------------------------------ |
| `-i`, `--input`   | Specifies input dir                              | "." (current directory)                    |
| `-o`, `--output`  | Specifies output file                            | "./sprite.svg"                             |
| `-v`, `--viewbox` | Specifies viewBox attribute                      | (parsed from each icon)                    |
| `-p`, `--prefix`  | Specifies prefix for id attribute                | "icon-"                                    |
| `-c`, `--config`  | Absolute path to the SVGO config file or "false" | -                                          |
| `-a`, `--attrs`   | Attributes for the SVG element                   | "aria-hidden="true""                       |
| `-s`, `--style`   | Inline style for the SVG element                 | "width: 0; height: 0; position: absolute;" |

```sh
Usage: svg-symbol-sprite [options]

Options:
    -i, --input     Specifies input dir (current dir by default)
    -o, --output    Specifies output file ("./sprite.svg" by default)
    -v, --viewbox   Specifies viewBox attribute (parsed by default)
    -p, --prefix    Specifies prefix for id attribute ("icon-" by default)
    -c, --config    Absolute path to the SVGO config file or "false"
    -a, --attrs     Attributes for the SVG element ('xmlns="http://www.w3.org/2000/svg" aria-hidden="true"' by default)
    -s, --style     Inline style for the SVG element ("width: 0; height: 0; position: absolute;" by default)
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
npx svg-symbol-sprite -i ./assets/svgs -o ./dist/sprite.svg
```

## SVG Optimization

`svg-symbol-sprite` optimizes the input SVG files using [SVGO](https://github.com/svg/svgo) and an opinionated configuration file. In order to customize the SVGO config, one can do so by using the `-c` or `--config` option and an absolute path to the SVGO config file.

**If you wish to completely disable the SVGO files optimization, pass "false" to the `--config` option.**

## Accessibility

`svg-symbol-sprite` does not help with SVG icons' accessibility. This is your responsibility as a developer - you should make sure that your SVGs contain relevant `title` and `id` attributes.

## LICENSE

MIT

---

<div align="center">
    Connect with me:
</div>

<br />

<div align="center">
    <a href="https://atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/logo.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="mailto:hi@atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/email.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.linkedin.com/in/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linkedin.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://github.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/github.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://gitlab.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/gitlab.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://twitter.com/scriptexbg">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/twitter.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.npmjs.com/~scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/npm.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.youtube.com/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/youtube.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://stackoverflow.com/users/4140082/atanas-atanasov">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/stackoverflow.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://codepen.io/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codepen.svg" width="20" alt="">
    </a>
    &nbsp;
    <a href="https://profile.codersrank.io/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codersrank.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://linktr.ee/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linktree.svg" height="20" alt="">
    </a>
</div>

---

<div align="center">
Support and sponsor my work:
<br />
<br />
<a href="https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20developer%20profile%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome" title="Tweet">
	<img src="https://img.shields.io/badge/Tweet-Share_my_profile-blue.svg?logo=twitter&color=38A1F3" />
</a>
<a href="https://paypal.me/scriptex" title="Donate on Paypal">
	<img src="https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?logo=paypal&color=222d65" />
</a>
<a href="https://revolut.me/scriptex" title="Donate on Revolut">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/revolut.json" />
</a>
<a href="https://patreon.com/atanas" title="Become a Patron">
	<img src="https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?logo=patreon&color=e64413" />
</a>
<a href="https://ko-fi.com/scriptex" title="Buy Me A Coffee">
	<img src="https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi" />
</a>
<a href="https://liberapay.com/scriptex/donate" title="Donate on Liberapay">
	<img src="https://img.shields.io/liberapay/receives/scriptex?label=Donate%20on%20Liberapay&logo=liberapay" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" title="Donate Bitcoin">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" title="Donate Etherium">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" title="Donate Shiba Inu">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" />
</a>
</div>
