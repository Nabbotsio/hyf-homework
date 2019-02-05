
// event listener to track when user clicks that button
document.querySelector(".get_weather").addEventListener("click", getWeatherInfo);


function getWeatherInfo (){
    let city = document.querySelector( ".input_City").value;
    if  (city ===""){                       //makes sure user enters a city
        alert("You have to enter a city")
    }
    else{
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=336dfd8b047bd14a503a18443213c6c9")
        .then(response => response.json())
        .then((weather)=>{
            console.log(weather);
            printWeatherDetails(weather) 
        })
    }  
}

// printing weather details
function printWeatherDetails (weather){
    let cityNameDiv = document.querySelector(".cityName")
    cityNameDiv.innerHTML ="Weather Information for " + weather.name;

    let tempDiv = document.querySelector(".temperature")
    tempDiv.innerHTML = "Temperature: "+ Math.round(weather.main.temp ) + "°" + "C";

    let humidityDiv=document.querySelector(".humidity");
    humidityDiv.innerHTML= "Humidity: "+ weather.main.humidity + "%";

    let discriptionDiv=document.querySelector(".description");
    discriptionDiv.innerHTML= "Description: "+ weather.weather[0].description;

    let image = document.querySelector(".icon");
    image.src ="http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png";
}

//  weather at current location
document.querySelector(".current_location_weather").addEventListener("click", locationWeather);

function locationWeather(){
    navigator.geolocation.getCurrentPosition((weatherNow)=>{
        console.log(weatherNow);
        fetch("https://api.openweathermap.org/data/2.5/weather?lat="+ weatherNow.coords.latitude + "&lon="+ weatherNow.coords.longitude +"&units=metric&appid=336dfd8b047bd14a503a18443213c6c9")
            .then(response => response.json())
            .then((weather) => {
                printWeatherDetails(weather);
            })    
    })
}