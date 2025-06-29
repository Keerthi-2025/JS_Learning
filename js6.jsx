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