# jubilant-readme-generator

> A command-line app to quickly and easily generate a README file

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Working with the generated file](#working-with-the-produced-file)
- [Software used](#software-used)

## Description

READMEs are a little difficult. They have a lot of parts that one may tend to omit. This makes it easy as you would just type in which parts you need to include.

Each README - at least the high quality ones - should include a description explaining the project's purpose, information how to install it, show how install and use the app, perform any tests, share how to contribute, and cement the project's licensing provisions.

Here I've built stronger skills with working with different third-party packages, and how to write files to the system.

## Installation

Install dependencies

```shell
npm install
```

## Usage

To run the project

```shell
node index.js
```

You will be asked to enter the following. The README will be formatted in Markdown so you may add any compliant syntax into these sections.

### Project Title

The name of your project. This will be at the top of the file.

### Description

Describe your project. Focus on what your purpose is, why you created this project, and how you put it together.

### Installation (optional)

Provide details for how someone would install the project.

### Usage (optional)

Provide some details as to how someone would use your application. This can be code examples, but whatever documentation you can provide that describes what your application does, what methods do, and how someone could use them if that applies.

### Contributing (optional)

How do you want someone to contribute to the project? Would it be reviewing active issues and then submitting a pull request? Let the community know!

### Testing (optional)

If your project has testing, share how to get them up and running if they apply.

### Licensing

Pick a license for your project. You can alternatively choose not to have a license.

A license badge is placed toward the top of the README and a link to the license source is provided, although you should have a copy of the license saved directly at the root of your repository.

Not all licenses are listed. The following are listed:

- [Apache 2.0 license](https://opensource.org/licenses/Apache-2.0)
- [Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)
- [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)
- [BSD 2 Clause License](https://opensource.org/licenses/BSD-2-Clause)
- [Creative Commons Zero 1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/)
- [GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)
- [GNU GPL v2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
- [IBM Public License Version 1.0](https://opensource.org/licenses/IPL-1.0)
- [The MIT License](https://opensource.org/licenses/MIT)
- [Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)
- [The Unlicense](http://unlicense.org/)

### A Github Username

Provide the link for someone to find your Github profile and connect with you.

### A contact email

If someone has any questions, they can reach out to you here about the project.

## Working with the produced file

After entering all the information, the README file is written to the `dist` folder of this project's directory. The file will be formatted in Markdown.

## Software used

### [Inquirer](https://github.com/SBoudrias/Inquirer.js/)

Inquirer is used to create an interactive command line interface.

## License

This application is licensed via [Unlicense](https://unlicense.org).