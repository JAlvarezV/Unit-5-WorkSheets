class Ball {
    constructor(svg,mX,mY){
        this.w = mX;
        this.h = mY;
        this.vx = parseInt(Math.random()*10)+1;
        this.vy = parseInt(Math.random()*10)+1;
        this.cr = parseInt(Math.random()*60)+10;
        this.x = this.randomIntFromInterval(this.cr,this.w-this.cr);
        this.y = this.randomIntFromInterval(this.cr,this.h-this.cr);

        this.red = parseInt(Math.random()*255);
        this.green = parseInt(Math.random()*255);
        this.blue = parseInt(Math.random()*255);
        this.element = document.createElementNS("http://www.w3.org/2000/svg","circle");
        this.element.setAttribute("stroke","rgb("+this.red+","+this.green+","+this.blue+")");
        this.element.setAttribute("fill","rgb("+this.red+","+this.green+","+this.blue+")");
        svg.appendChild(this.element);
    }

    randomIntFromInterval(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    move(){
        this.checkCollisionWithBorders();
        this.x += this.vx;
        this.y += this.vy;
        this.modify(this.x,this.y,this.cr);
    }

    modify(cx,cy,r){
        this.x = cx;
        this.y = cy;
        this.cr =r;
        this.element.setAttribute("cx",this.x);
        this.element.setAttribute("cy",this.y);
        this.element.setAttribute("r",this.cr);

    }

    checkCollisionWithBorders(){
        if(this.x-this.cr<=0 || this.x+this.cr >= this.w) this.vx *= -1;
        if(this.y-this.cr<=0 || this.y+this.cr >= this.h) this.vy *= -1;
    }

    checkCollisionWithBrick(brick){
        if (this.intersects(brick)){
            this.vy *= -1;
        }
       this.intersects(brick);
    }

   intersects(brick) {
        var circleDistancex = Math.abs(this.x - (brick.x + brick.width/2));
        var circleDistancey = Math.abs(this.y - (brick.y + brick.height/2));

        if (circleDistancex > (brick.width/2 + this.cr)) { return false; }
        if (circleDistancey > (brick.height/2 + this.cr)) { return false; }

        if (circleDistancex <= (brick.width/2)) { return true; }
        if (circleDistancey <= (brick.height/2)) { return true; }

        var cornerDistance_sq = Math.pow((circleDistancex - brick.width/2),2) + Math.pow((circleDistancey - brick.height/2),2);

        return (cornerDistance_sq <= Math.pow(this.cr,2));
    }

}