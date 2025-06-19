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
addBookToLibrary('Behold Humanity!: May We Come In?','Ralts Bloodthrone','471','Science Fiction','2021','Read');
addBookToLibrary('The Complete Works of H.P. Lovecraft','H.P. Lovecraft', '1112','Weird Fiction','2011','Not Read');
addBookToLibrary('The Shadow: The Golden Vulture', 'Lester Dent','128','Pulp Fiction','2006','Not Read');
addBookToLibrary("The Big Sleep","Raymond Chandler","227","Noir","1939","Read");
console.table(myLibrary);

function displayBook(myLibrary){ // Displays Book contents
  const card = document.querySelector(".card"); //Targets the card in the html 

  for (let i = 0; i < myLibrary.length; i++) { // Loops through the array for myLibrary
  let BookTitle = document.createElement("p");  //creates a bookTitle paragraph in the html card
  console.log(BookTitle);
  card.append(BookTitle);
  let BookAuthor = document.createElement("p");
  card.append(BookAuthor);
  let BookPages = document.createElement("p");
  card.append(BookPages);
  let BookGenre = document.createElement("p");
  card.append(BookGenre);
  let BookPubDate = document.createElement("p");
  card.append(BookPubDate);
  let BookStatus = document.createElement("p");
  card.append(BookStatus);
 }
}