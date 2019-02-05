
// event listener to track when user clicks that button
document.querySelector(".get_weather").addEventListener("click", getWeatherInfo);


function getWeatherInfo (){
    let city = document.querySelector( ".input_City").value;
    if  (city ===""){                       //makes sure user enters a city
        alert("You have to enter a city")
    }
    else{
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=336dfd8b047bd14a503a18443213c6c9")
        .then(response => response.json())
        .then((weather)=>{
            console.log(weather);
            console.log(weather.name);
 // printing weather details          
            let cityNameDiv = document.querySelector(".cityName")
            cityNameDiv.innerHTML ="Weather Information for " + weather.name;

            let tempDiv = document.querySelector(".temperature")
            tempDiv.innerHTML = "Temperature: "+ Math.round(weather.main.temp - 273) + "°" + "C";

            let humidityDiv=document.querySelector(".humidity");
            humidityDiv.innerHTML= "Humidity: "+ weather.main.humidity + "%";

            let discriptionDiv=document.querySelector(".description");
            discriptionDiv.innerHTML= "Description: "+ weather.weather[0].description;
            let image = document.querySelector(".icon");
            image.src ="http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png";
        })
    }
    
}