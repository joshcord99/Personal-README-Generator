// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License](https://img.shields.io/badge/License-${license}-yellow)`;
  } else if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-${license}-blue)`;
  } else if (license === "ISC") {
    return `[![License](https://img.shields.io/badge/License-${license}-green`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[![License](https://opensource.org/License-${license}-yellow)`;
  } else if (license === "Apache") {
    return `[![License](https://opensource.org/License-${license}-blue)`;
  } else if (license === "ISC") {
    return `[![License](https://opensource.org/License-${license}-green`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function returnLicenseSection (license) {
  if
} 
else {
  return "";
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return
  `  # ${data.title}
  
  // Description
  ${data.description}
  
  // Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  // Installation
  ${data.installation}
  
  // Usage
  ${data.usage}
  
  // License
  This project is licensed under the ${data.license} license.
  
  // Contributing
  ${data.contributing}
  
  // Tests
  ${data.tests}
  
  // Questions
  For any questions, please contact me via:
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
  `;
}


export default generateMarkdown;
