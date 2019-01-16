let books= ["oliver_twist", "golivers_travel", "tintin", "why_you_act", "snow_white", "chamber_secrets", "drummer_boy", "about_christmas", "secrets_life", "rich_poor_dad"];
console.log(books);

// function to creat a list of books
function listOfBooks(){
    ul = document.createElement("ul");
    document.body.appendChild(ul);
    for (let i=0; i<books.length; i++){
        let list = document.createElement("li");
        list.innerHTML = books[i];
        ul.appendChild(list);
    }
}
// Page header
let pageHeader = document.createElement("h1");
pageHeader.innerHTML = "10 BOOK I HAVE READ" ;
document.body.appendChild(pageHeader);

// header for ID list
let header1 = document.createElement("h2");
header1.innerHTML = "List of Book ID's" ;
document.body.appendChild(header1);

listOfBooks();

// creating array of objects containing all the details about the books
let bookDetails = [{id:books[0],
                   title: "Oliver Twist ask for more ",
                   language: "English",
                   author:"IBB"},

                   {id:books[1],
                    title:"Goliver's Travel",
                    language:"Fante", 
                    author:"CGB"},
                
                    {id:books[2],
                     title:"Tintin the Adventure", 
                     language:"Twi", 
                     author:"ESB"},
                             
                    {id:books[3],
                     title:"Why you act the way you do", 
                     language:"Ewe", 
                     author:"MKB"},
                
                    {id:books[4],
                     title:"Snow White and the eleven doufs",
                     language:"French", 
                     author:"AEB"},
                    
                    {id:books[5],
                     title:"Chamber Secrets",
                     language:"Spanish",
                     author:"SHB"},
                    
                    {id:books[6],
                     title:"The Little Drummer Boy", 
                     language:"Italian", 
                     author:"BMB"},
                    
                    {id:books[7],
                     title:"All About Christmas",
                     language:"Ga", 
                     author:"JEB"},
                    
                    {id:books[8],
                     title:"The Secrets of Life", 
                     language:"Danish",
                     author:"EAB"},

                    {id: books[9],
                     title:"Rich Dad Poor Dad", 
                     language:"Swedish", 
                     author:"JJB"}];

console.log(bookDetails);

let arrayOfKeys = Object.keys(bookDetails[1]);
console.log(arrayOfKeys);

// function to creat a list of  information Datail of books
function listOfBooksInfoDetails(){
    ol = document.createElement("ol");
    document.body.appendChild(ol);
    for (let i=0; i<bookDetails.length; i++){
        let heading = document.createElement("h3");
        heading.innerHTML = "Title: " + bookDetails[i].title;
        
// Creating main list
        let mainList = document.createElement("li");
        mainList.appendChild(heading);
        ol.appendChild(mainList);
        let ul = document.createElement("ul");
        mainList.appendChild(ul);
        
// creating sub list to show book detail info         
        let liId = document.createElement("li");
        liId.innerHTML = "ID: " + bookDetails[i].id;
        ul.appendChild(liId);

        let liLanguage = document.createElement("li");
        liLanguage.innerHTML = "Language: " + bookDetails[i].language;
        ul.appendChild(liLanguage);

        let liAuthor = document.createElement("li");
        liAuthor.innerHTML = "Author: " + bookDetails[i].author;
        ul.appendChild(liAuthor); 

       /* for (let k=0; k<arrayOfKeys.length; k++){
            let subli = document.createElement("li");
        subli.innerHTML = arrayOfKeys[k] + bookDetails[i].arrayOfKeys[k];
        ul.appendChild(subli);
        }*/

        

    }
}
// header for Book infomation section
let header2 = document.createElement("h2");
header2.innerHTML = "Detailed Information of Books read" ;
document.body.appendChild(header2);

listOfBooksInfoDetails();

