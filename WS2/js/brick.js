class Brick{
    constructor(svg,width,height,x,y,fillColor,strokeW,strokeColor){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.fillColor = fillColor;
        this.strokeW = strokeW;
        this.strokeColor = strokeColor;

        this.element = document.createElementNS("http://www.w3.org/2000/svg","rect");
        this.element.setAttribute("width",this.width);
        this.element.setAttribute("height",this.height);
        this.element.setAttribute("fill",this.fillColor);
        this.element.setAttribute("stroke-width",this.strokeW);
        this.element.setAttribute("stroke",this.strokeColor);
        this.element.setAttribute("x",this.x);
        this.element.setAttribute("y",this.y);
        svg.appendChild(this.element);
    }

    move(){}
}