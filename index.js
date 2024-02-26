// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "list",
    name: "shape",
    message: "Please select a shape for your logo:",
    choices: ["Square", "Circle", "Triangle"],
  },
  {
    type: "input",
    name: "color",
    message: "Please enter a color for the shape:",
  },
  {
    type: "confirm",
    name: "happy",
    message: function (answers) {
      return `
         Are you happy with your choices? 
      **************************************
                  Shape: \x1b[32m${answers.shape}\x1b[0m
                  Color: \x1b[32m${answers.color}\x1b[0m
      **************************************
      `;
    },
  },
  // Add more prompts for other information you want to include in the README
];

function promptUser() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Do stuff with responses here
      if (answers.happy) {
        console.log(answers);
      } else {
        console.log("Let's start over!");
        console.log(
          "=========================================================="
        );
        promptUser();
      }
    })
    .catch((error) => {
      console.error("Something went wrong:", error);
    });
}

promptUser();
