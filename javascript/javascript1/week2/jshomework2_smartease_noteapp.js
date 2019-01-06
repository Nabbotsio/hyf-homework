
//Note taking app
let notes = [];

function addNote(note, noteId){
    notes.push({noteId: noteId, note: note});
}

addNote("JS operators", 1);
addNote("HTML", 2);
addNote("if statement", 3);
addNote("CSS", 4);
addNote("looping", 5);
console.log(notes);

//console.log(notes[2].note);
//console.log(notes.length);

// Get a note
function getNoteFromId(id){
for (let i=0; i<notes.length; i++){
    if (id===notes[i].noteId) {
        let temp1 = notes[i];
        let check = true;
        if (check){ 
            console.log(temp1);
            return temp1;
        }
    }
    }
    return console.log("There is no such ID in the notes");
}
getNoteFromId(5);

// Read all Notes
function showAllNotes(){
    for (let i=0; i<notes.length; i++){
        return console.log("The note with id: " + notes[i].noteId + ", has the following note text:" + notes[i].note);
}
showAllNotes();