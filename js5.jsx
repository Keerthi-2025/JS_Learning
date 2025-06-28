//Return value from function
function fun(num){
    return num -  2;
}
fun(10);
// or console.log(fun(10));

function mul(num){
    return mul *10;
}
console.log(mul(10));

//Assisgnment with return value
var changed = 0;
function fun1(num){
    return num + 2;
}

changed = fun1(10);

var processed = 0;
function demo(number){
    return number - 10;
}
processed = demo(10);

//Boolean values
function booldata(){
    return true;
}

//Conditional statements
function trueorfalse(wasthattrue){
    if(wasthattrue){
        return "yes true";
    }
    return "no it is false";
}
console.log(trueorfalse(true));   // true

// Equal operator
function demo(val){
    if(val == 12){
        return "Equal";
    }
    return "Not Equal";
}
 console.log(demo(10)); // Not equal

 //Comparision operator
 function test(value){
    if (value === 10){
        return "Equal"
    }
    return "Not Equal";
 }
 console.log(test(10));

 //InEqual operator
 function notequal(val){
    if (val != 100){
        return "not Equal";
    }
    return " Equal";
 }
 console.log(notequal(99));

 function notequal(val){
    if (val !== 100){
        return "not Equal";
    }
    return "Equal";
 }
 console.log(notequal(99));

 
 //less than operator
 function test(val){
    if(val <25){
        return "less than 25";
    }
    if (val <10)
    {
        return "less than 10";
    }
    return "10 and above";
 }
 console.log(test(val(9)));

 //less than or equal to
 function lessthan(val){
    if (val <= 12)
    {
        return "less than 12";
    }
    if (val <= 24){
        return "less than 24";
    }
    return"more than 24";
 } 
 console.log(lessthan(23));

 //greater than 
 function testing(demo){
    if(demo > 12)
    {
        return "greater than 12";
    }
    if(demo >100)
    {
        return "greater than 100";
    }
    return " more than 100";
 }
 console.log(testing(101));

 // AND  operator
 function andop(val){
    if (val > 10 && val< 20 )
    {
        return "yes"
    }
    return "no"
 }
 console.log(andop(15));

 //OR operator
 function orop(val){
    if( val >10 || val < 100){
        return "yes";
    }
    return "no";
 }
 console.log(orop(200));

 //Else statement
 function elsestmt(val){
    if (val > 5){
        result = "Bigger than 5";

    }
    else{
        result = "less tha 5";
    }
    return result;
 }
 console.log(elsestmt(10));

 //Else if statement
 function elsestmt(val){
    if (val < 5){
        return "value is greater than 5";
    }
    else if (val > 10){
        return "value is greater than 10";
    }
    else{
        return "value is between 5 and 10";
    }
 
}console.log(elsestmt(2));

