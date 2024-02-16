const getUserInput = require('./getUserInput');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

async function main() {
  try {
    const userInput = await getUserInput();
    console.log("...");
    let shape;
    switch (userInput.shape) {
      case 'Triangle':
        shape = new Triangle();
        break;
      case 'Circle':
        shape = new Circle();
        break;
      case 'Square':
        shape = new Square();
        break;
    }
    shape.setColour(userInput.shapeColour);
    const svgData = {
      svgShape: shape.render(),
      text: userInput.tag,
      textColour: userInput.textColour
    }*
    const svgContent = `<*svg width="300" height="200">
                            ${svgData.svgShape}
                            <text x="50%" y="50%" fill="${svgData.textColour}" dominant-baseline="middle" text-anchor="middle">${svgData.text}</text></svg>`;

    fs.writeFile('logo.svg', svgContent, (err) => {
      if (err) throw err;
      console.log('SVG file saved!');
    });
  } catch (error) {
    console.error('Error:', error);
  }     *

}



main();