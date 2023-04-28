const inquirer = require("inquirer");
const SVG = require("../lib/svg");
const { Circle, Triangle, Square } = require("../lib/shapes");
const { writeFileSync } = require("fs");

class CLI {
  async run() {
    const { text } = await inquirer.prompt({
      type: "input",
      name: "text",
      message: "Enter up to three characters for the logo text:",
      validate: function (input) {
        if (input.length > 3) {
          return "Text must not exceed 3 characters.";
        }
        return true;
      },
    });

    const { textColor } = await inquirer.prompt({
      type: "list",
      name: "textColor",
      message: "Select a color for the text",
      choices: ["red", "blue", "green", "yellow"],
    });

    const { shape } = await inquirer.prompt({
      type: "list",
      name: "shape",
      message: "Choose a shape for the logo:",
      choices: ["circle", "triangle", "square"],
    });

    const { shapeColor } = await inquirer.prompt({
      type: "list",
      name: "shapeColor",
      message: "Select a color for the text",
      choices: ["red", "blue", "green", "yellow"],
    });

    let shapeObj;
    switch (shape) {
      case "circle":
        shapeObj = new Circle();
        break;
      case "triangle":
        shapeObj = new Triangle();
        break;
      case "square":
        shapeObj = new Square();
        break;
      default:
        throw new Error(`Invalid shape: ${shape}`);
    }
    shapeObj.setColor(shapeColor);
    console.log(textColor);
    const svg = new SVG(shapeObj);
    svg.createTextSvg(text, textColor);
    svg.createShape(shapeObj);

    //console.log(svg)

    const svgMarkup = svg.render();

    await writeFileSync("logo.svg", svgMarkup);

    console.log("Generated logo.svg");
  }
}

module.exports = CLI;
