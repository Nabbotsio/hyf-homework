// Age-ify (A future age calculator)
console.log();
console.log("Output of  future age calculator");
let yearOfBirth = 1988;
let yearFuture = 2029;
let age = yearFuture - yearOfBirth;
console.log("You will be " + age + "  years old in " + yearFuture);


// Goodboy-Oldboy (A dog age calculator)
console.log();
console.log("Output of A dog age calculator ");
let dogYearOfBirth = 2017;
let dogYearFuture = 2027;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = false;
if (shouldShowResultInDogYears == true) {
    console.log("Your dog will be " + 10*dogYear + " dog years old in " + dogYearFuture);
}

else{
    console.log ("Your dog will be " + dogYear + " human years old in " + dogYearFuture);
}


// Housey pricey (A house price estimator)
console.log();
console.log("Output of house price estimator");
let height = 8;
let width = 5;
let lenght = 11;
let gardenSizeInM2 = 100;
let volumeInMeters = height*lenght*width;
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
console.log( "House price = "+ housePrice);

// Ez Namey (Startup name generator)
console.log();
console.log("Output of Startup name generator");
let firstWords = ["Easy", "Awesome", "Corporate", "Smart", "Perfect", "Hitech", "Computech", "Fastrack", "Grupper", "Inter"];
let secondWords = ["Pulse", "Sektech", "Ultimate", "Nabbot", "Brenddy", "Trend", "Love", "Doorstep", "Sport", "Telenet"];
const randomNumber1 = Math.floor(Math.random() * 10) + 0
const randomNumber2 = Math.floor(Math.random() * 10) + 0
let firstStartUpName = firstWords[randomNumber1];
let secondStartUpName = secondWords[randomNumber2];
console.log("Your StartUp name is " + "'"+ firstWords[randomNumber1] + " " + secondWords[randomNumber2] + "'" + "and it contaians " + (firstStartUpName.length + secondStartUpName.length) + " characters" );