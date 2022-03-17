

//var topFiveCityNames = cityGrowths.map(city => city.City);
//var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));
var topFiveCityNames = cityGrowths.map(city => city.City);
var topFiveCityPopO = cityGrowths.map(city => parseInt(city.population));
var topFiveCityPop = topFiveCityPopO.sort((a,b) => b - a).slice(0,7);



var trace = {
    x: topFiveCityNames,
    y: topFiveCityPop,
    type: "bar"
};
var data = [trace];

var layout = {
    title: "Largest Cities",
    xaxis: {title: "City"},
    yaxis: {title: "Population, 2016-1017"}
};

Plotly.newPlot("bar-plot", data, layout);

