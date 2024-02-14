class Shape {
    constructor() {
      this.colour = 'black'; 
    }
  
    setColour(colour) {
      this.colour = colour;
    }
  }
  
class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.colour}" />`;
    }
}

class Circle extends Shape {
    render() {
          return `<circle cx="150" cy="100" r="50" fill="${this.colour}" />`;
        }
  }

class Square extends Shape {
    render() {
      return `<rect x="50" y="50" width="100" height="100" fill="${this.colour}" />`;
    }
}
  
module.exports = { Triangle, Circle, Square };
