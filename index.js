// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
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
    message: 'What is the link to the repository?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe your project.'
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
    type: 'checkbox',
    name: 'licensing',
    message: 'What license would you like to apply?'
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is the Github account the project is hosted on?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What email can someone reach out to with questions?'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  console.log(
    "README GENERATOR\n"
  )
  inquirer.prompt(questions);
}

// Function call to initialize app
init();
