const SVG = require('svg.js');
const inquirer = require('inquirer');
const fs = require('fs');

function makeLogo () {
    // Prompt for choosing 3 characters for logo
    const text = prompt('Choose three characters for text logo: ');

    // Prompt for choosing the color of the text
    const colorText = prompt('Choose the text of the color(can be hexadecimal number): ');

    // Prompt for asking the user for shapes
    const shapeType = parseInt(prompt('Choose the shape of your logo: '));

    // Choices for shapes
    let shape;
    switch(shapeType) {
        case 1:
            shape = 'circle';
            break;
        case 2:
            shape = 'square';
            break;
        case 3:
            shape = 'triangle';
            break;
        case 4:
            shape = 'rectangle';
            break;
        default:
            console.log('Must choose one!')
            return;
    }

    // Prompt for choosing a color for the shape
    const shapeColor = prompt('Choose the color of the shape(can be hexadecimal number): ');

    // Creating SVG Document
    const svg = SVG().size(300, 200);

    switch(shape) {
        case 'triangle':
            svg.polygon('100,0 200,200 0,200').fill(shapeColor);
            break;
        case 'square':
            svg.rect(150, 150).move(75, 75).fill(shapeColor);
            break;
        case 'circle':
            svg.circle(100).move(100, 50).fill(shapeColor);
            break;
    }

    svg.text(text).move(150 - (text.length * 10), 125).font({fill: colorText, family: 'monospace', size: 30 });

    fs.writeFileSync('logo.svg', svg.svg());

    console.log('Logo Generated!')

}

makeLogo();