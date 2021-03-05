const fs = require('fs')
const inquirer = require('inquirer')
// const utils = require('./utils');
const {createMD , licenseBadge} = require('./utils');
// const licenseBadge = require('./utils').licenseBadge;

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
    
    const license = data.license
    
    const badge = licenseBadge(license)
    
    const generatedMd = createMD(data, badge)
    

 fs.writeFile("README.md", generatedMd, (err) =>{
                err ? console.error(err) : console.log('Success!')
            })
    });
};

promptUser();