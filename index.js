const fs = require('fs')
const inquirer = require('inquirer')
const generateMd = () => { `
#${response.title}

## Table of Contents
*[Descripton](#description)
*[Installation](#installation)
*[Usage](#usage)
*[License](#license)
*[Contributors](#contributors)
*[Tests](#tests)
*[Questions](#questions)

##Descripton
${response.description}

## Installation
${response.installation}

## Usage
${response.usage}

## License
[![License: ${response.license}
    ($licenseBadge)
]
    ($licenseUrl)

## Contributors
${response.contributors}

## Tests
${response.testing}

## Questions
Please see my gihub: [Github Profile](https://github.com/${response.github})
<br></br>
You can also contact me at: ${response.email} for questions.
`
};
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
            type: 'input',
            message: 'What license was used for this application?',
            name: 'license',
          },
          {
            type: 'input',
            message: 'List any other contributors on this project (If there are not any contributors, enter "none").',
            name: 'contributors',
          },
          {
            type: 'input',
            message: 'What are the test instructions for this applicatoin?',
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
    
    ]).then((response) => {
    // //         // let licenseBadge
    // //         // let licenseURL
    //         generateMd(response);
    const generateMd =  `
 #${response.title}

## Table of Contents
*[Descripton](#description)
*[Installation](#installation)
*[Usage](#usage)
*[License](#license)
*[Contributors](#contributors)
*[Tests](#tests)
*[Questions](#questions)

##Descripton
${response.description}

## Installation
${response.installation}

## Usage
${response.usage}

## License
[![License: ${response.license}
 ($licenseBadge)]
($licenseUrl)

## Contributors
${response.contributors}

## Tests
${response.testing}

## Questions
Please see my gihub: [Github Profile](https://github.com/${response.github})

You can also contact me at: ${response.email} for questions.
`

 fs.appendFile("readme.md", generateMd, (err) =>{
                err ? console.error(err) : console.log('Success!')
            })
    });
};

promptUser();