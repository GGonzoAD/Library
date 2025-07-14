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


function displayBook(){ // Displays Book contents

  myLibrary.forEach(library => { //For each loop that iterates each object on the myLibrary array

    const card = document.createElement('form'); //creates a new form in the html 
    document.body.append(card); //Appends the div to the body
    card.classList.add('form'); //Adds a class to the form for css styling

    const title = document.createElement('p'); //Creates a paragrph element 
    title.textContent = `Title: ${library.title}`; //Adds the library title content

    const author = document.createElement('p');
    author.textContent = `Author: ${library.author}`; //Adds the library author content

    const genre = document.createElement('p');
    genre.textContent = `Genre: ${library.genre}`; //Adds the library genre content

    const pages = document.createElement('p');
    pages.textContent = `Pages: ${library.pages}`; //Adds the library pages content

    const pubDate = document.createElement('p');
    pubDate.textContent = `Publication Date: ${library.publicationDate}`; //Adds the library publication date content

    const stat = document.createElement('p');
    stat.textContent = `Status: ${library.status}`; //Adds the library status content

    const button = document.createElement('button');
    button.innerHTML = "Add a Book";
    button.classList.add('open-button');

    const button2 = document.createElement('button');
    button2.innerHTML = "Delete a Book";
    button2.classList.add('button');

    card.append(title);
    card.append(author);
    card.append(genre);
    card.append(pages);
    card.append(pubDate);
    card.append(stat);
    card.append(button);
    card.append(button2);
  })

  
  
}
displayBook();

const dialog = document.getElementById("modal");
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');

openModal.addEventListener('click', () => {
   dialog.showModal()
   });

closeModal.addEventListener('click', () => {
   dialog.close()
   });
  
