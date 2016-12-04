class Game {
    constructor(svg){
        this.ball = new Ball(svg,1200,500);
        this.playerBrick = new Brick(svg,300,50,450,447,"rgb(0,0,255)",3,"rgb(0,0,0)");
    }

    start(){
            setInterval(this.draw,1000/60);
    }

    stop(){

    }

    draw(){
            this.ball.checkCollisionWithBrick(this.playerBrick);
            this.ball.move();
    }
}