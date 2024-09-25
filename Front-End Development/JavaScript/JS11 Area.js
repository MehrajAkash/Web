
var base = parseFloat(prompt("Enter Base: "));
var height = parseInt(prompt("Enter Height: "));

var area = base*height;

document.write("Area = "+area.toFixed(4) + "<br/>");
document.write("Area: "+ area.toPrecision(3));
