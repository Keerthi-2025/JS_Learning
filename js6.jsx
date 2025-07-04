//Building Objects
var dog={
    "name":"dog",
    "legs":4,
    "tails":1,
    "friends":["dog2"]
}

//Accessing Objects using dot notation
var result = dog.name;
var result1 = dog.tails;

//Accessing Objects using Bracket Notation
var result = dog["name"];
var result1 = dog["tails"];

//Accessing Objects using varibales
var demo = "name";
var demo1 = dog[demo];

//Updating the Objects
dog.name = "dog1";

//Adding new propeties to Objects
dog.bark = "bow-bow";
dog["bark"] = "bow-bow";

//Deleting propeties fron Objects
delete dog.bark;

//Manipluating complex Objects
var music = [{
    "song":"abcd",
    "title":"dance",
    "formats":[
        "OT",
        "SONG"
    ],
    "movie":"xyz"
}];

//while loop
var arr =[]
var i = 0;
while(i<5){
    arr.push(i);
    i++;

}
console.log(i)

//for loop
var arr =[];
for(var i = 0;i<10;i++){
    arr.push(i);
}
console.log(arr)

//For loop for Even numbers
var arr =[];
for(i=0;i<10;i+=2){
    arr.push(i);
}console.log(arr);

//For loop for Odd numbers
var arr =[];
for(i=1;i<10;i+=2){
    arr.push(i);
}console.log(arr);

//Count Backwards with For Loop
var arr =[];
for(i=10;i>0;i-=1){
    arr.push(i);
}console.log(arr);

var arr =[];
for(i=10;i>0;i-=2){
    arr.push(i);
}console.log(arr);

//Generation  of random decimal numbers
function fun(){
    return Math.random();
}console.log(fun());

//Generation of random whole numbers
var arr = Math.floor(Math.random()*20)
function fun(){
    return Math.random();
}console.log(fun());

//parseInt Function
function par(str){
    return parseInt(str)
}
console.log("99");

function fun(str){
    return parseInt(str,2)
}console.log("10011");

//Ternary operator
function tern(a,b){
    return a === b ?true : false;
}tern(2,4);
console.log(tern());

//Multiple Ternary operator

function mul(num){
    return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
}console.log(mul(10));

//arrow functions
const arr = ()=>  new Date();

const arra1 = ()=> new Month();


//Spread Arrays
const arr1 = ["a","b","c","d"];
let arr2;
function arraydemo(){
    arr2 = arr1;
    arr1[0] ="cat";
}
console.log(arraydemo(arr2));


