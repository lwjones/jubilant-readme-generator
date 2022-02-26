// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const askQuestions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of the project?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('This field is required');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'url',
      message: 'What is the link to the project\'s website?',
      validate: url => {
        if (url) {
          return true;
        } else {
          console.log('Repo URL is required');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe the project.',
      validate: description => {
        if (description) {
          return true;
        } else {
          console.log('Please enter some information about your project');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Explain the installation process. (leave blank to skip)'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide some examples and instructions off its use. (leave blank to skip)'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can someone contribute to your project? (leave blank to skip)'
    },
    {
      type: 'input',
      name: 'testing',
      message: 'How can someone perform testing on your project? (leave blank to skip)'
    },
    {
      type: 'list',
      name: 'licensing',
      message: 'What license would you like to apply?',
      choices: [
        new inquirer.Separator(),
        'None',
        new inquirer.Separator(),
        'Apache 2.0 license',
        'Boost Software License 1.0',
        'BSD 3-Clause License',
        'BSD 2 Clause License',
        'Creative Commons Zero 1.0 Universal',
        'GNU GPL v3',
        'GNU GPL v2',
        'IBM Public License Version 1.0',
        'The MIT License',
        'Mozilla Public License 2.0',
        'The Unlicense'
      ]
    },
    {
      type: 'input',
      name: 'username',
      message:
        'What is the project owner\'s Github URL if someone has a question?',
      validate: username => {
        if (username) {
          return true;
        } else {
          console.log('Please provide the user\'s Github URL');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What email can someone reach out to with questions?',
      validate: email => {
        if (email) {
          return true;
        } else {
          console.log('Please provide a contact email');
          return false;
        }
      }
    }
  ]);
};

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./dist/${fileName}`, data, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created. Find it at this app\'s directory in the \`dist\` folder'
      })
    });
  });
};

// TODO: Create a function to initialize app
function init() {
  console.log(
    "README GENERATOR\n"
  )
  askQuestions()
    .then(readmeData => {
      console.log(readmeData);
      return writeToFile("README.md", generateMarkdown(readmeData));
    });
}

// Function call to initialize app
init();
