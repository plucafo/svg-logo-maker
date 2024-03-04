const fs = require("fs");
const Shapes = require("./shapes");

class SVG {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
  } 

  setText(message, color) {
    if (message.length > 3 || message.length < 1) {
      throw new Error("Text must be between 1 and 3 characters.");
    }

    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message.toUpperCase()}</text>`;
  }

  setShape(shape) {
    this.shapeElement = shape;
  }
}

function createSVGFile(answers) {
  const svg = new SVG();

  svg.setText(answers.text, answers.textColor);

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

  const svgContent = svg.render();

  fs.writeFileSync("logo.svg", svgContent);

  console.log("SVG file created successfully: logo.svg");
}

module.exports = { SVG, createSVGFile };
