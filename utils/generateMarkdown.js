// TODO: Create a function that returns a license badge based on which license is passed in
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
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[MIT License](https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache") {
    return `[Apache License](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "ISC") {
    return `[ISC License](https://opensource.org/licenses/ISC)`;
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function returnLicenseSection(license) 
  if (license == "MIT") {
    return "This project is licensed under the MIT license.";
  } if (license == "Apache2.0") {
    return "This project is licensed under the Apache License.";
  } 

// TODO: Create a function to generate markdown for README
function generateMarkdown(questions) {
  return 
}
## ${data.projectTitle}



## Description
${data.description}


export default generateMarkdown;
