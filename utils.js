module.exports = {
    licenseBadge: (licenseType) => {

        switch (licenseType) {
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
            default:
                response = ' '
                break;
        }
        return response;
    },

    createMD : (data, badge)=>{
       return `
# ${data.title}
${badge}
    
## Table of Contents
* [Descripton](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)

## Descripton
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
The following license was used in this project: ${data.license}
${response}


## Contributors
${data.contributors}

## Tests
${data.testing}

## Questions
Please see my gihub: [Github Profile](https://github.com/${data.github})

You can also contact me at: ${data.email} for questions.
       `
    }
}

