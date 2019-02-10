
// funtion that returns a promise
function notThisFunctionName (millisecondsToResolve){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
             resolve("I am called asynchronously");
        }, millisecondsToResolve)
       
    })
}

notThisFunctionName(6000)
    .then((message)=>{
        console.log(message);
    });



    // Movies exercises
    fetch ("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
        .then(response=>response.json())
            .then((movies)=>{
                let longMovies = movies.filter((movie)=>movie.running_times > 7000)
                console.log("Long Movies"); 
                console.log(longMovies);

                let longMovieTitles=longMovies.map((movie)=>movie.title);
                console.log("Titles of long movies")
                console.log(longMovieTitles);

                let badMovies = movies.filter ((movie)=> movie.rating < 5);
                console.log("Bad Movies")
                console.log(badMovies)

                let badMoviesSince2000 = badMovies.filter((movie)=>movie.year>=2000)
                console.log("Bad movies since year 2000");
                console.log(badMoviesSince2000);

                let titlesOfBadMoviesSince2000=badMoviesSince2000.map((movie)=>movie.title)
                console.log("Titles of bad movies since year 2000");
                console.log(titlesOfBadMoviesSince2000);
            })

// Fetching and waiting
let fetchNWait= new Promise ((resolve)=>{
    fetch("https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=336dfd8b047bd14a503a18443213c6c9")
        .then(response=>response.json())
        .then((info)=>{
            setTimeout(()=>{
                resolve(info)
            },3000)
        })
})
                
fetchNWait
    .then((info)=>{
        console.log(info);
    })
    

// Using chainin to fetch and wait
 fetch("https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=336dfd8b047bd14a503a18443213c6c9")
    .then((response)=>response.json())
    .then((info)=>{
        setTimeout(()=>{
            console.log("This is weather data for Copenhagen")
            console.log(info)
            },7000)    
    })       


// Rewrite Time exercises
// Timeout
function setTimeoutPromise(time){
    return new Promise((resolve)=>{
        setTimeout(resolve,time)

    })
}

setTimeoutPromise(3000)
    .then(() => {
        console.log('Called after 3 seconds');
    });


//Current Location
function getCurrentLocation() {
    return new Promise ((resolve,reject)=>{
       navigator.geolocation.getCurrentPosition(resolve,reject)   
    })
}

    getCurrentLocation()
    .then((position) => {
        // called when the users position is found
        console.log(position);
    })
    .catch((error) => {
        // called if there was an error getting the users location
        console.log(error);
    });