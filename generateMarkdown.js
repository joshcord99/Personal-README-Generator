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
  //Clearly state the name of the project at the top.
# ${data.projectTitle}

// Provide a brief overview of what the project is about, its purpose, and what problem it solves.
## Description
${data.description}

<!-- Insert Gif/image Here -->
<!-- ![](insert image/gif link here from github repo) -->


## Badges
${renderLicenseBadge(data.license)}

//List the main sections of the README for easy navigation, especially for longer documents.
## Table of Contents
- [Installation Instructions](#installation-instructions)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Test](#test)
- [Contact](#contact)

//Explain how to install the project. Include system requirements, necessary dependencies, and step-by-step instructions.
## Installation Instructions
${data.installation}

//Provide examples of how to use the project, including code snippets, command line instructions, or screenshots if applicable.
## Usage
${data.usage}

//Include information about the project's license (e.g., MIT, Apache, GPL) and link to the license file.
## License
${returnLicenseSection(data.license)}

//Outline guidelines for contributing to the project, including code standards, the process for submitting pull requests, and any rules for collaboration.
## Contributions
${data.contributions}

//Describe how to run tests for the project, including any required setup or tools.
## Test
${data.tests}

//Provide contact details for users to reach out for support or inquiries, including email or links to social media profiles.
## Contact
- GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
- Email: ${data.emailAddress}
  `;
}

export default generateMarkdown;
