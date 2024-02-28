class Shapes {
  static square(color) {
    return `<rect x="75" y="25" width="150" height="150" fill="${color}" />`;
  }

  static circle(color) {
    return `<circle cx="150" cy="100" r="80" fill="${color}" />`;
  }

  static triangle(color) {
    return `<polygon points="150,0 260 150, 35 150" fill="${color}" />`;
  }
}

module.exports = Shapes;
