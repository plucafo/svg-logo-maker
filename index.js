// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter project title:",
  },
  {
    type: "input",
    name: "description",
    message: "Enter project description:",
  },
  {
    type: "confirm",
    name: "includeLicense",
    message: "Would you like to include a license section and badge?:",
  },
  {
    type: "list",
    name: "license",
    message: "Please select your license from the list:",
    choices: ["Apache", "GNU", "MIT"],
  },
  // Add more prompts for other information you want to include in the README
];

function promptUser() {
    inquirer
      .prompt(questions)
      .then((data) => {
        // Do stuff with responses here
        console.log(data);
      })
      .catch((error) => {
        console.error("Something went wrong:", error);
      });
  }

  promptUser();