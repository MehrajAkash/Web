
var num = 85;

console.log(typeof(num));

num = toString(num); // type converted into string
console.log(typeof(num)); // type is string
document.write(num);

var n = "22.6";
n = parseInt(n);
console.log(typeof(n));
console.log(n);

number = 44;
number = parseFloat(number); 
console.log(typeof(number));
console.log(number.toFixed(3)); // toFixed(2) - means 2 digits will be print after point.

document.write(number.toFixed(5));

var value = 33.678;
console.log(value.toPrecision(2)); // toPrecision(2) - means totally 2 digits will print and these 2 digits are closes to round figure.
console.log(value.toPrecision(4));

document.write(value.toPrecision(3));

n = toString(number);
console.log(typeof(n));
document.write(n);

console.log(typeof(Number("88.5")));
console.log(Number("  18  "));
console.log(Number("22.58"));


console.log(typeof(value.toPrecision()));
console.log(typeof(value.toFixed()));
