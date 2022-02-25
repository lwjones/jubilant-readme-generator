// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const askQuestions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the name of your project');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'url',
      message: 'What is the link to the repository?',
      validate: url => {
        if (url) {
          return true;
        } else {
          console.log('Please enter the name of your project');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe your project.',
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
      message: 'Explain the installation process.'
    },
    {
      type: 'input',
      name: 'usage',
      message: ''
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can someone contribute to your project?'
    },
    {
      type: 'input',
      name: 'testing',
      message: 'How can someone perform testing on your project?'
    },
    {
      type: 'list',
      name: 'licensing',
      message: 'What license would you like to apply?',
      choices: [
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
        'What is the project owner\'s Github if someone has a question?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What email can someone reach out to with questions?'
    }
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  console.log(
    "README GENERATOR\n"
  )
  askQuestions()
    .then(readmeData => {
      console.table(readmeData);
    });
}

// Function call to initialize app
init();
