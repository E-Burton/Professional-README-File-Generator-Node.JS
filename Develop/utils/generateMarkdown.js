// function to generate markdown for README

const fs = require('fs')
const path = require('path')

const apache = fs.readFileSync(path.resolve("../Develop/Licenses", 'Apache.txt'), 'utf8');

const gnu = fs.readFileSync(path.resolve("../Develop/Licenses", 'GNU.txt'), 'utf8');

const isc = fs.readFileSync(path.resolve("../Develop/Licenses", 'ISC.txt'), 'utf8');

const mit = fs.readFileSync(path.resolve("../Develop/Licenses", 'MIT.txt'), 'utf8');

function generateMarkdown(data) {

  if (data.license === "Apache License 2.0") {
    badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    text = apache;
  } else if (data.license === "GNU General Public License v3.0") {
    badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    text = gnu;
  } else if (data.license === "MIT License") {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    text = mit;
  } else {
    badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    text = isc;
  }

  return `# ${data.title}
  ${badge}

  ## Description
  
  ${data.description}

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licnese](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}
  
  ## License
  
  ${text}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  ${data.questions} <br>
  <br>
  GitHub: https://github.com/${data.username} \t Email: ${data.email}

`;
}

module.exports = generateMarkdown;
