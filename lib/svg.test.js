const SVG = require("./svg");

// Test to check that render() is genearting an SVG file
describe("SVG", () => {
  it("should return an SVG file when the render method is called", () => {
    const svg = new SVG();
    const result = svg.render();
    expect(result).toContain(
      '<svg version=\"1.1\" width=\"300\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\"></svg>'
    );
  });
});
