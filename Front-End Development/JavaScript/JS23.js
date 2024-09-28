
var number = Number(prompt("Enter a number: "));


console.log(number>0 ? "positive" : "Negative");


var value = Number(prompt("Enter another number"));

var result =  number>80 ? "A+" : (number>70 && number<80) ? "A" : (number>60 && number<70) ? "A--" : "Lower Number";
console.log(result);
document.write(result);