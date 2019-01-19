// creating an array of 3 functions

let firstFunction = function () {
    console.log("My name is Marcellus Botsio.");
}

let secondFunction = function () {
    console.log("I come from Ghana.")
}

let thirdFunction = function (){
    console.log("I live in Denmark.")
}

let arrayOfFunctions = [firstFunction, secondFunction, thirdFunction];

// calling the functions from the array
for (let i=0; i<arrayOfFunctions.length; i++){
    let functionOutputs=arrayOfFunctions[i];
    functionOutputs();
}

// function as a constant
const myFunction = function (){
                            let name = "Marcellus"
                        console.log(name + " is learning Javasript at HackYourFuture");
                    }

// creating a function normally
function myHobies(){
    console.log("My hobies are Singing, listening to music and travelling");
}

myFunction();
myHobies();

// Object with a fuction as the value of a key

let myInfo = { "id": 101,
                "Name": "Marcellus",
                "City": function mycity(){console.log("My city is Sekondi in Ghana")}


}

myInfo.City(); // calls the function in the object

//Creating setTimeouts

const HYF = function (){
                    console.log("HYF stands for HackYourFuture. It is a coding school")
                    }

setTimeout(HYF,5000);// with a function defined as a constant

setTimeout(()=>console.log("HYF offers top class coding lessons for free"), 8000 ); // with anonomous funtion within it

// inner and outer functions
function outer(){
    inner =function(){ console.log("HYf classes are on Sundays from 12:00 - 16:00 ")};
    return inner;
}

let results = outer(); 
results();