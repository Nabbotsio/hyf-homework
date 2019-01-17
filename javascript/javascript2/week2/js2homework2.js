function sayThree(){
    console.log("divisible by 3");
}

function sayFive(){
    console.log("divisible by 5");
}


function threeFive(startIndex, stopIndex, threeCallback, fiveCallback ){
    let numberArray =[]; 
    for(let i=startIndex; i<=stopIndex; i++){
        numberArray.push(i)
    }

    for (i=0; i<numberArray.length; i++){
        if (numberArray[i]%3==0){
            threeCallback();
        }

        if (numberArray[i]%5==0) {
            fiveCallback();   
        }
        
    }
    console.log(numberArray);
}

threeFive(2,15, sayThree, sayFive);