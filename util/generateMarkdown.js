// generate markdown for the readme

const generateReadme = (answers) =>
 `
## ${answers.title}


## Description
${answers.description}

## Table of Contents
- [Description] (#description)
- [Installation] (#installation)
- [Usage] (#usage)
- [License] (#license)
- [Contributors] (#contributors)
- [Testing] (#testing)
- [Questions] (#questions)


## Installation
${answers.installation}


## Usage
${answers.usage}


## License
${answers.license}
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)


## Contributors
${answers.contributors}


## Testing
${answers.questions}


## Questions
If you have any questions, please contact me below:

GitHub: [${answers.username}](https://github.com/${answers.username})

Email:  [${answers.email}](mailto:${answers.email})


`;

module.exports = generateReadme;

