function DeleteMe() {
    document.getElementById("MyResult").value = "";
}
function calculate(NewValue) {
    document.getElementById('MyResult').value += NewValue;
}
function Reset() {
    var tmp = document.getElementById('MyResult').value;
    tmp = tmp.substring(0, tmp.length - 1);
    document.getElementById("MyResult").value = tmp;
}

function Answer() {
    var a = document.getElementById('MyResult').value;
    var b = eval(a);
    document.getElementById("MyResult").value = b;
}