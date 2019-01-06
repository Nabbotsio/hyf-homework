// function that returns an empty object.
function emptyObject () {
    return { };
}
// object with time key
let timeObject = emptyObject();
timeObject.time = 12;
console.log(timeObject);


// function that returns an array with 3 objects.
console.log();
function arrayOfObjects (color1,color2,color3){
   let myArray = [];
    myArray.push({color:color1});
    myArray.push({color:color2});
    myArray.push({color:color3});
return myArray; 
}
let colorObjects = arrayOfObjects("red", "yellow", "green");
 console.log(colorObjects);

 console.log();

for( let i=0; i<colorObjects.length; i++ ){
console.log(colorObjects[i].color);
    console.log();
}


// Meeting Day assignment
let todayDate = new Date();
console.log(todayDate.getDay());
let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

let daysToMeet = 11;

console.log("Today is: " + weekday[todayDate.getDay()]);
console.log("How many days to meet : " + daysToMeet);
// calculation and printing of meeting day
console.log("We are meeting on : " + weekday[todayDate.getDay() + daysToMeet%7]);