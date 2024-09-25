import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.ts';

// TODO: Create an array of questions for user input
function questions {
  return ''  [
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
      message: 'Steps require to install this project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Any features in this project?',
      name: 'features',
    },
    
  ];
}

// TODO: Create a function to write README file
function writeToFile('fileName', data) {
  fs.writeFile('README.md', data, (error) => {
    if (error) {
      console.eror('Error writing the fil:', eror);
    } 
}

// TODO: Initialize the app
function init() {
  inquirer.prommpt(questions).then(answers => {
    let generatedContent = generateMarkdown(answers);
    writeToFile('README.md', generatedContent);
    console.error('Error:', errr);
  });


// Function call to initialize app
init();
