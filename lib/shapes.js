class Shapes {
  static square(color) {
    return `<rect width="50" height="50" fill="${color}" />`;
  }

  static circle(color) {
    return `<circle cx="150" cy="100" r="80" fill="${color}" />`;
  }

  static triangle(color) {
    return `<polygon points="0,0 100,0 0,100" fill="${color}" />`;
  }
}

module.exports = Shapes;
