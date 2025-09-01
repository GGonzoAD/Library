const myLibrary = [  // My Array of Books
];


function Book(title, author, pages, genre, publicationDate ,status) {  //Constructor of books 
  this.title = title; //Books title
  this.author = author; //Books author
  this.pages = pages; // Books pages
  this.status = status; //Books status
  this.genre = genre; //Books Genre
  this.publicationDate = publicationDate; // Books publication
  this.id = crypto.randomUUID(); // Gives books a randomized id
  this.info = function() {
    return this.title + "" + this.author + "" + this.pages + "" + this.status + "" + this.genre + "" + this.publicationDate + "" + this.id; //Returns all of the book info
  };
  // the constructor...
}

function addBookToLibrary(title, author, pages, genre, publicationDate, status, id) { // take params, creates a book then stores it in the array
 const newBook = new Book(title, author, pages, genre, publicationDate ,status, id);
 myLibrary.push(newBook); //Stores a new book in the array
}
addBookToLibrary('Behold Humanity!: May We Come In?','Ralts Bloodthrone','471','Science Fiction','September 25,2021','Read');
addBookToLibrary('The Complete Works of H.P. Lovecraft','H.P. Lovecraft', '1112','Weird Fiction','March 1,2011','Not Read');
addBookToLibrary('The Shadow: The Golden Vulture', 'Lester Dent','128','Pulp Fiction','July 1,2006','Not Read');
addBookToLibrary("The Big Sleep","Raymond Chandler","227","Noir","Feb 6,1939","Read");

Book.prototype.statusChange = function() { // Book Status change prototype with function to change the text for the status field on the displayed books.
 if (this.status != this.status){
  this.status.innerHTML=("Read") || ("Not Read");
  console.log(Book.status); 
 }
};



function displayBook(){ // Displays Book contents

  const uniqueArray = myLibrary.filter((o, index, arr) =>
    arr.findIndex(item => JSON.stringify(item) === JSON.stringify(o)) === index
 );
  uniqueArray.forEach(uniqueArray => { //For each loop that iterates each object on the unique array

    const card = document.createElement('form'); //creates a new form in the html 
    document.body.append(card); //Appends the div to the body
    card.classList.add('form'); //Adds a class to the form for css styling

    const title = document.createElement('p'); //Creates a paragrph element 
    title.textContent = `Title: ${uniqueArray.title}`; //Adds the library title content

    const author = document.createElement('p');
    author.textContent = `Author: ${uniqueArray.author}`; //Adds the library author content

    const genre = document.createElement('p');
    genre.textContent = `Genre: ${uniqueArray.genre}`; //Adds the library genre content

    const pages = document.createElement('p');
    pages.textContent = `Pages: ${uniqueArray.pages}`; //Adds the library pages content

    const pubDate = document.createElement('p');
    pubDate.textContent = `Publication Date: ${uniqueArray.publicationDate}`; //Adds the library publication date content

    const stat = document.createElement('p');
    stat.textContent = `Status: ${uniqueArray.status}`; //Adds the library status content

    const button = document.createElement('button');
    button.innerHTML = "Add a Book";
    button.classList.add('open-button');
    button.type = "button";
    button.id = "Open-Button";

    const button2 = document.createElement('button');
    button2.innerHTML = "Delete a Book";
    button2.classList.add('delete-button');
    button2.type = "button";
    button2.id = "Delete";

    const button3 = document.createElement('button');
    button3.innerHTML = "Status";
    button3.classList.add('button');
    button3.type = "button";
    button3.id = "status"

    card.append(title);
    card.append(author);
    card.append(genre);
    card.append(pages);
    card.append(pubDate);
    card.append(stat);
    card.append(button);
    card.append(button2);
    card.append(button3);
}
)}
displayBook();

const modal = document.querySelector('.modal');
const openModal = document.querySelectorAll('.open-button');
const closeModal = document.querySelector('.close-button');
const StatButton = document.getElementById("status");
const statusInput = document.getElementById("statusInput");
const statusInput2 = document.getElementById("statusInput2");
const deleteBook = document.querySelectorAll('.delete-button');
const closeButton = document.getElementById("close");

openModal.forEach(open => {
  open.addEventListener('click', () => modal.showModal());
})

closeButton.addEventListener('click', () => {
  modal.close();
})

closeModal.addEventListener("click",(e) => {
  const titleInput = document.getElementById("titleInput");
  const Title = titleInput.value;
  
  const authorInput = document.getElementById("authorInput");
  const Author = authorInput.value;
  
  const genreInput = document.getElementById("genreInput");
  const Genre = genreInput.value;
  
  const pagesInput = document.getElementById("pagesInput");
  const Pages = pagesInput.value;
  
  const pubdateInput = document.getElementById("pubdateInput");
  const PubDate = pubdateInput.value;
  
  const Status = statusInput.value;
  
  const Status2 = statusInput2.value;

  addBookToLibrary(Title, Author, Pages, Genre, PubDate, Status, Status2);
  e.preventDefault();
  modal.close();
  displayBook();
})

StatButton.addEventListener("click",() => {
  Book.prototype.statusChange();
})

statusInput.addEventListener("click",function() {
  statusInput2.disabled = true;
});

statusInput2.addEventListener("click",function() {
  statusInput.disabled = true;
});