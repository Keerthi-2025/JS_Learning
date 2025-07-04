//Template literlas
const person ={
    "name":"Bob",
    "age":10
}

const greet =   `My name is ${person.name}. And ${person.age} years old`; // use backticks
console.log(greet);

const createperson =(name,age,gender)=>{
    return{
        name:name,
        age:age,
        gender:gender
    };
};
console.log(createperson("demo",10,"male"));

//class syntax
var space = function(target){
    this.target = target;
}
var zeus = new space("Jupiter");
console.log(zeus.target);



function makeclass(){
    return vegetable;
}
const vegetable = makeclass();
const carrot = new vegetable('carrot');
console.log(carrot.name);


function makeclass(){
    class vegetable{
        constructor(name){
            this.name = name;
        }
    }
    return vegetable;
}
//const vegetable  = makeclass();
//const carrot = new vegetable('carrot');
console.log(carrot.name);

//using getter and setters to control access to an object
class Book{
    constructor(author){
        this._author = author;
    }

        get writer(){
            return this._author;
        }
        set writer(updateauthor){
            this._author = updateauthor;
        }
}


class Book{
    constructor(author){
        this._author = author;
    }

        get writer(){
            return this._author;
        }
        set writer(updateauthor){
            this._author = updateauthor;
        }
}

const myBook = new Book("George Orwell");

console.log(myBook.writer); // Output: George Orwell

myBook.writer = "Aldous Huxley";
console.log(myBook.writer); // Output: Aldous Huxley


