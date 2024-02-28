// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const SVG = require("./lib/svg");
const Shapes = require("./lib/shapes");

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

function createSVGFile(answers) {
  const svg = new SVG();

  // Set text based on user's input
  svg.setText(answers.text, answers.textColor);

  // Create and set shape based on user's input
  switch (answers.shape) {
    case "Square":
      svg.setShape(Shapes.square(answers.shapeColor));
      break;
    case "Circle":
      svg.setShape(Shapes.circle(answers.shapeColor));
      break;
    case "Triangle":
      svg.setShape(Shapes.triangle(answers.shapeColor));
      break;
  }
  // Render SVG content
  const svgContent = svg.render();

  // Write SVG content to a file
  fs.writeFileSync("logo.svg", svgContent);

  console.log("SVG file created successfully: logo.svg");
}

promptUser();
