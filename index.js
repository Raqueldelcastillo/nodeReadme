const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description of your project?",
    name: "description",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    message: "What is your emaill adrress?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the installation instructions?",
    name: "instruction",
  },
  {
    type: "input",
    message: "Who has contributed on this project?",
    name: "contributing",
  },
  {
    type: "input",
    message: "What is your GitHub number?",
    name: "gitHub",
  },
  {
    type: "input",
    message: "Do you have any questions?",
    name: "questions",
  },
];

// function to write README file
// function writeToFile(fileName, data) {
// }
inquirer.prompt(questions).then((data) => {
  console.log(data);
  // const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

  fs.writeFile("readMe.md", generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
});
// function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
