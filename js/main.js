import { Player } from './player.js';
import { InputHandler } from './inputs.js';

window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    class Game {
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.player = new Player(this);
            this.input = new InputHandler();
        }
        update(){
            this.player.update(this.input.keys);
        }
        draw(context, deltaTime){
            this.player.draw(context, deltaTime);
        }
    }

    const game = new Game(canvas.width, canvas.height);
    
    let lastTime = 0;
    function animate(timeStamp){
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update();
        game.draw(ctx, deltaTime);
        requestAnimationFrame(animate);
    }

    animate(0);
});