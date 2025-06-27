//Function
function fun(){
    console.log("Hello World");
}
fun();

//passing values to functions with arguments
function add(a, b){
    console.log(a + b);
}
add(10,10);

function mul(p,q){
    console.log(p * q);
}
 mul(10,10);

 //Global Scope and Functions
 //Scope refers to visibility of variables
 //variables which are defined outside the function are global scope
 //Global scope variables can been seen anywhere in js


 //varibales declared inside the functions and their functions paratmeters local scope i.e only visisbe in the function
 function fun1(){
    var myvar = 10;
console.log(myvar);
 }

 fun1();

 //Global varibale and local variables can have the same name nut local varibales overwrites global varibale
 var dress = "shirt";
 function fundress(){
    return dress;
 }
 console.log(fundress); // shirt   // printing the function name

 var dress = "shirt";
 function fundress(){
    var dress = "shirt1";
    return dress;
 }
 console.log(fundress());   // shirt1
