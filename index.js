// Include packages needed for this application
const inquirer = require("inquirer");
const { createSVGFile } = require("./lib/svg");

// Create an array of valid color names a user can enter
const validColorNames = ["blue", "red", "green", "yellow", "purple", "pink", "black", "orange", "indigo", "violet", "cyan", "turquoise", "white", "grey"]

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
    validate: (color) => {
      const lowercaseColor = color.toLowerCase();
      if (validColorNames.includes(lowercaseColor)) {
        return true;
      } else {
        return 'Please enter a valid color name.';
        return false;
      }
    }
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
    validate: (color) => {
      const lowercaseColor = color.toLowerCase();
      if (validColorNames.includes(lowercaseColor)) {
        return true;
      } else {
        return 'Please enter a valid color name.';
        return false;
      }
    }
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
