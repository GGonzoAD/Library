const myLibrary = [  // My Array of Books
];


function Book(title, author, pages, genre, publicationDate ,read) {  //Constructor of books 
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.genre = genre;
  this.publicationDate = publicationDate;
  this.id = crypto.randomUUID();
  this.info = function() {
    return this.name + "" + this.author + "" + this.pages + "" + this.read + "" + this.genre + "" + this.publicationDate + "" + this.id;
  };
  // the constructor...
}

function addBookToLibrary(title, author, pages, genre, publicationDate, read, id) { // take params, create a book then store it in the array
 const newBook = new Book(title, author, pages, genre, publicationDate ,read, id);
 myLibrary.push(newBook); 
}
addBookToLibrary('Behold Humanity!: May We Come In?','Ralts Bloodthrone','471','Science Fiction','2021','Read');
addBookToLibrary('The Complete Works of H.P. Lovecraft','H.P. Lovecraft', '1112','Weird Fiction','2011','Not Read');
addBookToLibrary('The Shadow: The Golden Vulture', 'Lester Dent','128','Pulp Fiction','2006','Not Read');
addBookToLibrary("The Big Sleep","Raymond Chandler","227","Noir","1939","Read");
console.table(myLibrary);
