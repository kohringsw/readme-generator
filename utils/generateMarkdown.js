// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation Instructions](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation Instructions
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## License ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  This application is covered under the ${data.license} license.

  ## Questions
  If you have questions about this application: 
  - :octocat: Find me on GitHub (${data.username}) or 
  - :email: Email me at ${data.email}.
`;
}

module.exports = generateMarkdown;
