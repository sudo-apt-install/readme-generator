// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  switch (license) {
    case "MIT":
      badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case "GNULGPLv3":
      badge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
      break;
    case "GNUAGPLv3":
      badge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
      break;
    case "Apache":
      badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case "IBM":
      badge = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
      break;
    case "Mozilla":
      badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
    case "Boost":
      badge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
      break;
    default:
      break;
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // renderLicenseBadge();
  // renderLicenseSection();
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Contributions](#contributions)
  4. [Tests](#tests)
  5. [License](#license)

  ## Description 
  ${data.description}

  ## Installation
  ${data.installation}

  ## Contributions
  ${data.contributions}
  
  ## License 
  ${data.license}


`;
}

module.exports = generateMarkdown;
