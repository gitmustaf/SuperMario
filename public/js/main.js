import SpriteSheet from './SpriteSheet.js';
import loadImage from './LoadImage.js';

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

context.fillRect(0,0,50,50);

loadImage('/image/tiles.png')
.then(image => {
    const sprites = new SpriteSheet(image, 16, 16);
    sprites.define('ground', 0, 0);
    sprites.draw('ground', context, 45, 62);
});