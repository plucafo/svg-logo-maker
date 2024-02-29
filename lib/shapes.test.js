const Shapes = require('./shapes');

describe('Shapes', () => {
    describe('square', () => {
      it('should return SVG for a square', () => {
        const result = Shapes.square();
        expect(result).toContain('<rect x="75" y="25" width="150" height="150"');
      });
    });
  
    describe('circle', () => {
      it('should return SVG for a circle', () => {
        const result = Shapes.circle();
        expect(result).toContain('<circle cx="150" cy="100" r="80"');
      });
    });
  
    describe('triangle', () => {
      it('should return SVG for a triangle', () => {
        const result = Shapes.triangle();
        expect(result).toContain('<polygon points="150,0 260 150, 35 150"');
      });
    });
  });