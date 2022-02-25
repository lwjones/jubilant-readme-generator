// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

${data.installation ? `## Installation\n${data.installation}` : ''}

${data.usage ? `## Usage\n${data.usage}` : ''}

${data.contributing ? `## Contributing\n${data.contributing}` : ''}

${data.tests ? `## Tests\n${data.tests}` : ''}

## Questions

If you would like to connect, find me at ${data.username} or reach out to me at ${data.email}

`;
}

module.exports = generateMarkdown;
