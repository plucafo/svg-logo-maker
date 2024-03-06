const { createSVGFile, SVG } = require("./svg");
const fs = require("fs");

// If user enters an empty string or more than 3 characters it should throw an error
describe("SVG", () => {
  describe("Set Text Empty", () => {
    it("should throw an error when the user enters an empty string", () => {
      const svg = new SVG();
      expect(() => svg.setText("")).toThrow(
        "Text must be between 1 and 3 characters."
      );
    });
  });
  describe("Set Text More Than 3 Chars", () => {
    it("should throw an error when the user enters more than 3 characters", () => {
      const svg = new SVG();
      expect(() => svg.setText("hello")).toThrow(
        "Text must be between 1 and 3 characters."
      );
    });
  });
});

describe("createSVGFile", () => {
  it("should create an SVG file with the correct content", () => {
    const answers = {
      text: "ABC",
      textColor: "red",
      shape: "Square",
      shapeColor: "blue",
    };

    createSVGFile(answers);

    const svgContent = fs.readFileSync("logo.svg", "utf-8");

    expect(svgContent).toContain(
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="25" width="150" height="150" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text></svg>'
    );
  });
});
