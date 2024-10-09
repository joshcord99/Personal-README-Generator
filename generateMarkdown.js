// Created a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "ISC") {
    return `[![License](https://img.shields.io/badge/License-ISC-green.svg)](https://opensource.org/licenses/ISC)`;
  } else {
    return "";
  }
}

// Created a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[MIT License](https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache") {
    return `[Apache License](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "ISC") {
    return `[ISC License](https://opensource.org/licenses/ISC)`;
  } else {
    return "";
  }
}

//Created a function that returns the license section of README
// If there is no license, return an empty string
function returnLicenseSection(license) {
  if (license === "MIT") {
    return "This project is licensed under the MIT license.";
  } else if (license === "Apache") {
    return "This project is licensed under the Apache License.";
  } else if (license === "ISC") {
    return "This project is licensed under the ISC License.";
  } else {
    return "";
  }
}

//Created a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.projectTitle}


## Description
${data.description}

## Badges
${renderLicenseBadge(data.license)}

## Table of Contents
- [Installation Instructions](#installation-instructions)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Test](#test)
- [Question](#question)

## Installation Instructions
${data.installation}

## Usage
${data.usage}

## License
${returnLicenseSection(data.license)}

## Contributions
${data.contributions}

## Test
${data.tests}


## Question
- GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
- Email: ${data.emailAddress}
  `;
}

export default generateMarkdown;
