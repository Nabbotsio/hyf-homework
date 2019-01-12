i=0

// function declare to give out spirit name when user enters name and click.
function buttonclik () {
    let name = document.getElementById("nameInput").value;
    console.log(name);
    let randonNum = Math.floor(Math.random()*10); //generates random number from 0-9
    console.log(randonNum);
    document.getElementById("spiritNameDisplaydiv").innerHTML = name + " - " + spiritAnimalList[randonNum]; 


if (i==0){ // if statment to make sure the new spirit name button is created only once
//creats a new buttom to give user option to request for a new spirit animal name
let newSpiritNameBotton = document.createElement("button");
document.body.appendChild(newSpiritNameBotton);
newSpiritNameBotton.innerHTML = "Get a new Spirit Animal Name";
i=i+1
newSpiritNameBotton.addEventListener("click",buttonclik);
}
}

document.getElementById("spiritNameButton").addEventListener("click",buttonclik);
console.log("i = " + i);


// array of the spirit animal names.
let spiritAnimalList=["The flying Horse", "The crying Butterfly", "The Strong Lion", "Tiger the fighter", "The beautiful Bird", "The Lion King", "The fearful Monkey", "The mighty Elephant", "Hippo the water master", "The sea Fish" ];


