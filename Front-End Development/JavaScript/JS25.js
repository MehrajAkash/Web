
document.write("haerljf ");

(function sum(num1,num2){
    console.log(num1+num2);
})(15,21);

(function display(message){
    console.log(message);
    document.write(message);
})("HelloBangladesh");


// Function Expressions
const display2 = function displayMessage(){
    console.log("This is function Expression.");
};
display2(); //calling display2 function.

var display3 = function displaythree(mes){
    console.log(mes);
};
display3("This is another display");