function sayThree(){
    console.log("divisible by 3");
}

function sayFive(){
    console.log("divisible by 5");
}


function threeFive(startIndex, stopIndex, threeCallback, fiveCallback ){
    // generating the array
    let numberArray =[]; 
    for(let i=startIndex; i<=stopIndex; i++){
        numberArray.push(i)
    }
console.log(numberArray);

    for (i=0; i<numberArray.length; i++){
        if (numberArray[i]%3==0){
            threeCallback();
        }

        if (numberArray[i]%5==0) {
            fiveCallback();   
        }
    } 
}

threeFive(2,15, sayThree, sayFive);

function clikMebtnAction(){
        clikMeButton.innerHTML = "You Clicked Me";
}

//creating an input field to enter numbers
const numInput = document.createElement("input");
document.body.appendChild(numInput);
numInput.type = "number"
numInput.placeholder = "type a number"

// creats the click me button
const clikMeButton = document.createElement("button");
document.body.appendChild(clikMeButton);
clikMeButton.innerHTML = "Click Me";
clikMeButton.style.backgroundColor = "red";
clikMeButton.addEventListener("click",clikMebtnAction)


function bGndColorChange(){
    let numberEntered = numInput.value;//captures the number inputed
    if(numberEntered%3==0){
        document.body.style.backgroundColor = "blue"
    }
    else if (numberEntered%5==0) {
        document.body.style.backgroundColor = "yellow"
    }
}
clikMeButton.addEventListener("click", bGndColorChange);

const locationBtnDiv = document.createElement("div");
document.body.appendChild(locationBtnDiv);
const showLocationBtn = document.createElement("button");
locationBtnDiv.appendChild(showLocationBtn);
showLocationBtn.innerHTML = "Show Location";
showLocationBtn.addEventListener("click", showLocationBtnClik);

const locationDisplaydiv = document.createElement("div");
document.body.appendChild(locationDisplaydiv);

function showLocationBtnClik (position){
   
   if(!"geolocation" in navigator){
        locationBtnDiv.innerHTML ="Lacation unavailable";
        alert = "Geolocation not supported"
    }

        let latitude  = position.coords.latitude;
        let longitude = position.coords.longitude;
        locationDisplaydiv.innerHTML = "Latitude: " + latitude + "°" + "  Longitude: " + longitude + "°";

}
