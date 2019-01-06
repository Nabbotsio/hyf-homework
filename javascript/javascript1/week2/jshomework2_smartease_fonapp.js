
//Smart phone usage app
let activities = [];
// function to input activities 
function addActivity (date, activity, durationInMinutes){
     activities.push({date: date, 
                      activity: activity, 
                      duration: durationInMinutes});
}

addActivity('23/7-18', 'Youtube', 30);
addActivity('23/7-18', 'Videos', 60);
addActivity('23/7-18', 'phone calls', 15);
addActivity('23/7-18', 'games', 12);

console.log(activities);

//Show my status
const useLimit=100
function showStatus (activities){
    totalTime=0;
    if (activities.length==0){ 
        console.log();
    return console.log("There are no activities recorded, please add some activities before calling showStatus")
    }
    else {
        for (let i=0; i<activities.length; i++){
            totalTime= totalTime + activities[i].duration;
        }
        console.log();
         console.log("You have added " + activities.length + " activities. They amount to " + totalTime + " min. of usage.");
 
// Phone Usage Limit        
         if (totalTime>=useLimit){
             console.log(); 
             console.log("You have reached your limit, no more smartphoning for you!");
         }
    }
}
showStatus (activities);