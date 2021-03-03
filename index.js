const fs = require('fs')
const inquirer = require('inquirer')

const promptUser = () => {
    inquirer
    .prompt ([
          {
            type: 'input',
            message: 'What is the title of this project?',
            name: 'title',
          },
          {
            type: 'input',
            message: 'Enter a short description of this project.',
            name: 'description',
          },
          {
            type: 'input',
            message: 'Provide the steps needed to install this application.',
            name: 'installation',
          },
          {
            type: 'input',
            message: 'How would a user run this application?',
            name: 'usage',
          },
          {
            // dropdown list of licenses, Apache license 2.0, IBM, MIT, ISC, NONE
            type: 'list',
            message: 'What license was used for this application?',
            name: 'license',
            choices: ['None', 'GNU General v2', 'Apache license 2.0', 'MIT','IBM', 'Open Data'],
          },
          {
            type: 'input',
            message: 'List any other contributors on this project (If there are not any contributors, enter "none").',
            name: 'contributors',
          },
          {
            type: 'input',
            message: 'What are the test instructions for this application?',
            name: 'testing',
          },
          {
            type: 'input',
            message: 'What is your github username for contact?',
            name: 'github',
          },
          {
            type: 'input',
            message: 'What is your email address for questions?',
            name: 'email',
          },
    
    ]).then((data) => {
    const input = data.license
    let licenseBadge = () =>{
        console.log(input)
        if (typeof input === 'string'){
            switch (input) {
                case 'Apache license 2.0':
                response = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
                break;
                case 'GNU General v2':
                response = '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
                break;
                case 'MIT':
                response = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
                break;
                case 'IBM':
                response = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
                break;
                case 'Open Data':
                response = '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)'
                break;
                case 'None':
                response = ' '
                break;
                default :
                response = ' '
                break;
            }
            return response;
        };
    };
    licenseBadge();
    
    const generateMd =  `
 # ${data.title}

## Table of Contents
*[Descripton](#description)
*[Installation](#installation)
*[Usage](#usage)
*[License](#license)
*[Contributors](#contributors)
*[Tests](#tests)
*[Questions](#questions)

## Descripton
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
License: ${data.license}
${response}


## Contributors
${data.contributors}

## Tests
${data.testing}

## Questions
Please see my gihub: [Github Profile](https://github.com/${data.github})

You can also contact me at: ${data.email} for questions.
`

 fs.appendFile("readme.md", generateMd, (err) =>{
                err ? console.error(err) : console.log('Success!')
            })
    });
};

promptUser();