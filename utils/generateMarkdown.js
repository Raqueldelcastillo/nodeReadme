// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}
## Table of Contents
- [email](#email) 
- [instruction](#instruction)
- [license](#license)
- [contributing](#contributing)
- [gitHub](#gitHub)
- [questions](#questions)




## Email
${data.email}

## Instruction
${data.instruction}
## Contributing
${data.contributing}
## License
${data.license}
## GitHub
${data.github}

`;
}

module.exports = generateMarkdown;

//finish table of contents
//##data
