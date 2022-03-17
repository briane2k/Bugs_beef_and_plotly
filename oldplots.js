// var trace = {
//     x: ["Burritos", "Pizza", "Chicken"],
//     y: [10, 18, 5],
//     type: "bar"
// };

var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum n coke", "nonalcoholic mai tai", "nonalcoholic gin n tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "pie"
};



// var layout = {
//     title: "Luncheon Survey",
//     xaxis: {title: "Food Option"},
//     yaxis: {title: "Number of Respondents"}
// };

var data = [trace]

// var layout = {
//     title: "Beverages order by percent",
//     xaxis: {title: "Beverage Chosen"},
//     yaxis: {title: "Percentage "}
// };


var layout = {
    title: "'Pie' Chart",
    xaxis: {title: "Drinks"},
    yaxis: {title: "% of Drinks Ordered"}
};



// var numbers = [1,2,3,4,5];
// //var results = numbers.map(function(number){return number*2;});
// var results = numbers.map(num => number * 2);
// console.log(results);

// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
// var results = words.filter(function(word){return word.charAt(0)==='s';});
// console.log(results);

var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b).reverse();
 console.log(sortedAge);



Plotly.newPlot("plotArea", data, layout);
