const { Circle, Triangle, Square } = require("./shapes");

class SVG {
  constructor(text, textColor, shape, shapeColor) {
    if (text.length > 3) {
      throw new Error("Text must not exceed 3 characters.");
    }

    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }

  render() {
    //const shapeInstance = this.createShapeInstance();
    //const shapeSvg = shapeInstance.render();
    const textSvg = this.createTextSvg();

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${this.shape}
      ${this.text}

    </svg>`;
  }

  // createShapeInstance() {
  //   console.log(this.shape)
  //   switch (this.shape) {
  //     case "circle":
  //       return new Circle(this.shapeColor);
  //     case "triangle":
  //       return new Triangle(this.shapeColor);
  //     case "square":
  //       return new Square(this.shapeColor);
  //     default:
  //       throw new Error(`Unsupported shape: ${this.shape}`);
  //   }
  // }

  createTextSvg(text, textColor) {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}

module.exports = SVG;
