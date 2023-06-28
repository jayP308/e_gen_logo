import fs from 'fs';
import { createSVGWindow } from 'svgdom';
import { SVG, registerWindow } from '@svgdotjs/svg.js';
import inquirer from 'inquirer';

async function makeLogo() {
  // Create an SVG window
  const window = createSVGWindow();
  const document = window.document;

  // Register the SVG window to work with svg.js
  registerWindow(window, document);

  const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Choose three characters for text logo: ',
      validate: function (input) {
        if (input.length <= 3) {
          return true;
        }
        return 'Please choose three characters.';
      }
    },
    {
      type: 'input',
      name: 'colorText',
      message: 'Choose the color of the text (can be hexadecimal number): '
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose the shape of your logo: ',
      choices: ['circle', 'triangle', 'square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Choose the color of the shape (can be hexadecimal number): '
    },
  ];

  const userChoices = await inquirer.prompt(questions);
  const { text, colorText, shape, shapeColor } = userChoices;

  // Creating SVG Document using svg.js
  const canvas = SVG(document.documentElement).size(400, 400);

  switch (shape) {
    case 'triangle':
      canvas.polygon('100,0 200,200 0,200').move(85, 25).fill(shapeColor);
      break;
    case 'square':
      canvas.rect(165, 150).move(100, 75).fill(shapeColor);
      break;
    case 'circle':
      canvas.circle(200).move(85, 50).fill(shapeColor);
      break;
  }

  canvas.text(text).move(150 - text.length * 0, 150).font({ fill: colorText, family: 'monospace', size: 40 });

  const svgString = canvas.svg();
  fs.writeFileSync('logo.svg', svgString);

  console.log('Logo Generated!');
}

makeLogo();
