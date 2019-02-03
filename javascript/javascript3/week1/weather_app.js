
document.querySelector(".get_weather").addEventListener("click", getWeatherInfo);


function getWeatherInfo (){
    let city = document.querySelector( ".input_City").value;
    if  (city ===""){
        alert("You have to enter a city")
    }
    else{
        //console.log(city);
        //alert(city);
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=336dfd8b047bd14a503a18443213c6c9")
        .then(response => response.json())
        .then((weather)=>{
            //let cityWeatherInfo = weather.filter(()=>{})
            console.log(weather);
            console.log(weather.name);
           
            let cityNameDiv = document.querySelector(".cityName")
            cityNameDiv.innerHTML ="Weather Information for " + weather.name;

            let tempDiv = document.querySelector(".temperature")
            tempDiv.innerHTML = "Temperature: "+ Math.round(weather.main.temp - 273) + "°" + "C";

            let humidityDiv=document.querySelector(".humidity");
            humidityDiv.innerHTML= "Humidity: "+ weather.main.humidity + "%";

            let discriptionDiv=document.querySelector(".description")
            discriptionDiv.innerHTML= "Description: "+ weather.weather[0].description;

        })
    }
    
}