


for(var i=0;i<3;i++){
    console.log("<h1>Bangladesh</h1>");

}


for( i=0;i<3;i++){
    
    var digit = prompt("Enter a digit"+ (i+1) +": ");
    switch(digit){
        case "0":
            console.log("Zero");
            break;
            
        case "1":
            console.log("One");
            break;
    
        case "2":
            console.log("two");
            break;
            
        case "3":
            console.log("three");
            break;
    
        case "4":
            console.log("Four");
            break;
         
        default:
            console.log("Not a desired digit");    
            break;
    }
}
