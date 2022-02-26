/**
 * Creates a badge for use in markdown for a specific license.
 * @param {string} license Full license name
 * @returns markdown formatted badge. If no license is provided or it is not
 * found, and empty string is returned.
 */
function renderLicenseBadge(license) {

  // Badge source: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
  switch(license) {
    case 'Apache 2.0 license':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'Boost Software License 1.0':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    case 'BSD 3-Clause License':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case 'BSD 2 Clause License':
      return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
    case 'Creative Commons Zero 1.0 Universal':
      return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
    case 'GNU GPL v3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'GNU GPL v2':
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
    case 'IBM Public License Version 1.0':
      return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
    case 'The MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Mozilla Public License 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    case 'The Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    default:
      return '';
  }
}

/**
 * Gets the URL for a specific license
 * @param {string} license Full license name
 * @returns Raw URL of license information. If no license is provided or it is
 * not found, and empty string is returned.
 */
function renderLicenseLink(license) {
  switch(license) {
    case 'Apache 2.0 license':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'Boost Software License 1.0':
      return 'https://www.boost.org/LICENSE_1_0.txt';
    case 'BSD 3-Clause License':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    case 'BSD 2 Clause License':
      return 'https://opensource.org/licenses/BSD-2-Clause';
    case 'Creative Commons Zero 1.0 Universal':
      return 'http://creativecommons.org/publicdomain/zero/1.0/';
    case 'GNU GPL v3':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'GNU GPL v2':
      return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
    case 'IBM Public License Version 1.0':
      return 'https://opensource.org/licenses/IPL-1.0';
    case 'The MIT License':
      return 'https://opensource.org/licenses/MIT';
    case 'Mozilla Public License 2.0':
      return 'https://opensource.org/licenses/MPL-2.0';
    case 'The Unlicense':
      return 'http://unlicense.org/';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  licenseLink = renderLicenseLink(license);

  if (licenseLink) {
    if (license.split('The ')[1] !== undefined) {
      license = license.split('The ')[1];
    }

    return `## License

This work is licensed under the [${license}](${licenseLink}).`
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.licensing)}

## Description

${data.description}

${data.installation ? '## Installation\n'+ data.installation : ''}

${data.usage ? '## Usage\n' + data.usage : ''}

${data.contributing ? '## Contributing\n' + data.contributing : ''}

${data.tests ? '## Tests\n' + data.tests : ''}

## Questions

If you would like to connect, find me at ${data.username} or reach out to me at ${data.email}

${renderLicenseSection(data.licensing)}
`;
}

module.exports = generateMarkdown;
