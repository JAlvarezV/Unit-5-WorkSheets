//Se ejecuta cuando se cargue el paquete
window.onload = function () {
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(draw);
    google.charts.load('upcoming', {'packages': ['geochart']});
    google.charts.setOnLoadCallback(drawMap);

    setTimeout(function () {

    },10000);
}

function draw () {
    var data = google.visualization.arrayToDataTable([
        ["Partido", "2016"],
        ["PP", 137],
        ["PSOE", 85],
        ["Podemos", 71],
        ["Ciudadanos", 32],
        ["ERC", 9],
        ["CDC", 8],
        ["PNV", 5],
        ["CCA", 1],
    ]);

    options = {
        hAxis: {
            title: "PARTIDOS"
        },
        vAxis: {
            title: "ESCAÑOS"
        },
        animation:{
            startup: true,
            duration: 2000,
            easing: 'inAndOut'
        },
    };

    var options2 = {
        pieHole: 0.25, //Hole's radio
    };

    bar = new google.visualization.ColumnChart(document.getElementById('barras'));
    var pie = new google.visualization.PieChart(document.getElementById('donut'));

    bar.draw(data, options);
    pie.draw(data,options2);

    setTimeout(function () {
        redraw();
    },10000);

}

function redraw() {
    var data = google.visualization.arrayToDataTable([
        ["Partido", "2016"],
        ["PP", Math.floor((Math.random() * 150) + 1)],
        ["PSOE", Math.floor((Math.random() * 90) + 1)],
        ["Podemos", Math.floor((Math.random() * 80) + 1)],
        ["Ciudadanos", Math.floor((Math.random() * 40) + 1)],
        ["ERC", Math.floor((Math.random() * 10) + 1)],
        ["CDC", Math.floor((Math.random() * 8) + 1)],
        ["PNV", Math.floor((Math.random() * 4) + 1)],
        ["CCA", Math.floor((Math.random() * 2) + 1)],
    ]);
    bar.draw(data,options);
    setTimeout(redraw,3000);
}

function drawMap () {
    var data = google.visualization.arrayToDataTable([
        ["País", "Millones de visitantes"],
        ["France", 86.1],
        ["United States", 77.9],
        ["Spain", 68.2],
        ["China", 56.8],
        ["Italy", 50.8],
        ["Turkey", 39.3],
        ["Germany", 34.9],
        ["United Kingdom", 33.9],
        ["Mexico", 32.1],
        ["Russia", 31.6],
    ]);

    var map = new google.visualization.GeoChart(document.getElementById('mapa'));
    map.draw(data);
}