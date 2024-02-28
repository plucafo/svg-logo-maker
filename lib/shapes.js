class Square {
    constructor(side) {
      this.side = side;
      this.createSquare();
    }
  
    createSquare() {
      this.shapeElement = `<rect width="${this.side}" height="${this.side}" fill="green" />`;
    }
  }

  class Circle {
    constructor(radius) {
      this.radius = radius;
      this.createCircle();
    }
  
    createCircle() {
      this.shapeElement = `<circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="red" />`;
    }
  }

  class Triangle {
    constructor(base, height) {
      this.base = base;
      this.height = height;
      this.createTriangle();
    }
  
    createTriangle() {
      this.shapeElement = `<polygon points="0,0 ${this.base},0 0,${this.height}" fill="blue" />`;
    }
  }