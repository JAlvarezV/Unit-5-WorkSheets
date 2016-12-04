window.onload = function () {
    var svg = document.getElementById("mySvg");
    var g = new Game(svg);
    var FPS = 60;
    setInterval(function() {
       g.draw() // your function here
    }, 1000 / FPS);
};