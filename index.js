const SVG = require('svg.js');

function makeLogo () {
    const text = prompt('Choose three characters for text logo: ');

    const colorText = prompt('Choose the text of hte color(can be hexadecimal number: ');

    const shapeType = parseInt(prompt('Choose the shape of your logo: '));

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

}