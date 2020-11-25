// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  ${data.tableOfContents}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  
  ## License
  ${data.license}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  ${data.questions} <br>
  <br>
  GitHub: [${data.username}] <br>
  Email: [${data.email}]

`;
}

module.exports = generateMarkdown;
