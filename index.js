// Include packages needed for this application
const inquirer = require("inquirer");
const { createSVGFile } = require("./lib/svg");

// Questions array for inquirer prompt
const questions = [
  {
    type: "input",
    name: "text",
    message: "Please enter the text for your logo - no more than 3 characters:",
  },
  {
    type: "input",
    name: "textColor",
    message: "Please enter a color for the text:",
  },
  {
    type: "list",
    name: "shape",
    message: "Please select a shape for your logo:",
    choices: ["Square", "Circle", "Triangle"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Please enter a color for the shape:",
  },
  {
    type: "confirm",
    name: "happy",
    message: function (answers) {
      return `
         Are you happy with your choices? 
      **************************************
                     Text: \x1b[32m${answers.text}\x1b[0m
               Text Color: \x1b[32m${answers.textColor}\x1b[0m
                    Shape: \x1b[32m${answers.shape}\x1b[0m
              Shape Color: \x1b[32m${answers.shapeColor}\x1b[0m
      **************************************
                     `;
    },
  },
  // Add more prompts as needed
];

// Inquirer prompt function
function promptUser() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Do stuff with answers here
      if (answers.happy) {
        createSVGFile(answers);
      } else {
        console.log(`
                > Let's start over! <
========================================================`);
        promptUser();
      }
    })
    .catch((error) => {
      console.error("Something went wrong:", error);
    });
}

promptUser();
