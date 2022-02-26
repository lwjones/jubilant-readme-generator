# Sandwich Picker

[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Contributing](#contributing)
- [Questions](#questions)
- [License](#license)

## Description

Ever try to think about what you could put on a sandwich? Well we have a couple of toppings and protiens to choose from. From ham to tofu, lettuce to bbq sauce, you can put whatever you want into your sandwich!

## Installation

Install using

```shell
npm i
```

## Usage

Start with the `new` keyword after importing `Sandwich` into your project.

```js
Sandwich(bread[, protien, vegitables, sauces, isToasted])
```

You have the following options. Items enclosed in [] are optional.

- `bread` Your choice of `white`, `wheat`, `chibata`, and `roll`

- `protien` An array of choices of `ham`, `chicken`, `bacon`, `tofu` to put onto the sandwich

- `vegitables` An array of vegitable options to put on the sandwich

- `sauces` An array of sauces to put on the sandwich

- `isTosted` States if sandwich is toasted or not; defaults to false

Example:

```js
const sandwich = include("Sandwich");

const italian = new Sandwich();
```

## Contributing

Want to contribute to this project? Feel free to open an issue or pull request. View our Contributing guidelines.

## Questions

If you would like to connect, find me at github.com/tom or reach out to me at tom@myspace.com.

## License

This work is licensed under the [Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0).
