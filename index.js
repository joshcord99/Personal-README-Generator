import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.ts';

// TODO: Create an array of questions for user input
function questions () {
  return [
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'projectTitle',
    },
    {
      type: 'input',
      message: 'Provide a short description of your project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'githubUsername',

    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'emailAddress',

    },
    {
      type: 'input',
      message: 'Steps require to install this project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What would you use this for?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Who help create this project?',
      name: 'credits',

    },
    {
      type: 'list',
      message: 'What license would you like to use?',
      name: 'license',
      choices: ['MIT', 'Apache', 'ISC', 'None']
    },
    {
      type: 'input',
      message: 'Any features in this project?',
      name: 'features',
    },
    {
      type: 'input',
      message: 'How would you recieve contributions?',
      name: 'contributions',

    },

    {
      type: 'input',
      message: 'How would you run tests on this project?',
      name: 'tests',

    }
  ];
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error('Error writing the file:', err);
    } else {
      console.log(`${fileName} has been generated!`);
    }
  });
}

// TODO: Initialize the app
function init() {
  inquirer.prompt(questions()).then(answers => {
    const generatedContent = generateMarkdown(answers);
    writeToFile('README.md', generatedContent);
  }).catch(error => {
    console.error('Error:', error);
  });
}

// Function call to initialize app
init();