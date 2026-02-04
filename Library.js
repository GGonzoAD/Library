const myLibrary = [];  // My Array of Books



function Book(title, author, pages, genre, publicationDate ,status) {  //Constructor of books 
  this.title = title; //Books title
  this.author = author; //Books author
  this.pages = pages; // Books pages
  this.status = status; //Books status
  this.genre = genre; //Books Genre
  this.publicationDate = publicationDate; // Books publication
  this.id = crypto.randomUUID(); // Gives books a randomized id
  this.info = function() {
    return this.title + "" + this.author + "" + this.pages + "" + this.status + "" + this.status2 + "" + this.genre + "" + this.publicationDate + "" + this.id; //Returns all of the book info
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

function displayBook(){ // Displays Book contents
    const form = document.getElementById("Form-Container");
    const card = document.createElement('form');
  myLibrary.forEach((myLibrary, index) => { //For each loop that iterates each object on the unique array

     //creates a new form in the html 
    form.append(card); //Appends the div to the body
    card.classList.add('form'); //Adds a class to the form for css styling

    const title = document.createElement('p'); //Creates a paragrph element 
    title.textContent = `Title: ${myLibrary.title}`; //Adds the library title content

    const author = document.createElement('p');
    author.textContent = `Author: ${myLibrary.author}`; //Adds the library author content

    const genre = document.createElement('p');
    genre.textContent = `Genre: ${myLibrary.genre}`; //Adds the library genre content

    const pages = document.createElement('p');
    pages.textContent = `Pages: ${myLibrary.pages}`; //Adds the library pages content

    const pubDate = document.createElement('p');
    pubDate.textContent = `Publication Date: ${myLibrary.publicationDate}`; //Adds the library publication date content

    let Stat = document.createElement('p');
    Stat.textContent = `Status: ${myLibrary.status}`; //Adds the library status content
    Stat.id = `${this.status}-${index}`;

    const Add_a_Book = document.createElement('button');
    Add_a_Book.innerHTML = "Add a Book";
    Add_a_Book.classList.add('open-button');
    Add_a_Book.type = "button";
    Add_a_Book.id = "Open-Button";

    const Delete_a_Book = document.createElement('button');
    Delete_a_Book.innerHTML = "Delete a Book";
    Delete_a_Book.classList.add('delete-button');
    Delete_a_Book.type = "button";
    Delete_a_Book.id = `${myLibrary.deleteBook}-${index}`;

    const Reading = document.createElement('button');
    Reading.innerHTML = "Status";
    Reading.classList.add('status-button');
    Reading.type = "button";
    Reading.dataset.bookID = myLibrary.id;
    Reading.addEventListener('click', () => {
      toggleStatus(myLibrary.id);
    })

    card.append(title,author,genre,pages,pubDate,Stat,Add_a_Book,Delete_a_Book,Reading);
}
)};
displayBook();

 function toggleStatus (bookID){
  const book = myLibrary.find(b => b.id === bookID);

  if(!book) return;
  book.status = book.status === "Read" ? "Not Read" : "Read";

  const form = document.getElementById("Form-Container");
  form.innerHTML = "";
  console.log(book.status);
  displayBook();
 };

Book.prototype.deleteBook = function (bookID){
  const objectIndex = myLibrary.findIndex(book => book.id === bookID)
  myLibrary.splice(objectIndex,1);
  const form = document.getElementById("Form-Container");
  form.innerHTML = "";
  displayBook()
  
 };

const modal = document.querySelector('.modal');
const openModal = document.querySelectorAll('.open-button');
const closeModal = document.getElementById("Close-Button");
const StatButton = document.querySelectorAll('.status-button');
const statusInput = document.getElementById("statusInput");
const statusInput2 = document.getElementById("statusInput2");
const deleteBook = document.querySelectorAll('.delete-button');
const closeButton = document.getElementById("close");


openModal.forEach(open => {
  open.addEventListener('click', () => modal.showModal());
});

closeButton.addEventListener('click', () => {
  modal.close();
});

StatButton.forEach(button =>{
  button.addEventListener('click',Book.prototype.toggleStatus);
});

deleteBook.forEach(button =>{
  button.addEventListener('click',Book.prototype.deleteBook);
});

statusInput.addEventListener("click",function() {
  statusInput2.disabled = true;
});

statusInput2.addEventListener("click",function() {
  statusInput.disabled = true;
  statusInput.value = statusInput2.value;
});

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
  modal.close();
  e.preventDefault();
  const form = document.getElementById("Form-Container");
  form.innerHTML = "";
  displayBook();
})
