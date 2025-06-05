
const myLibrary = [  // My Array of Books
  'Behold Humanity!: May We Come In?','Ralts Bloodthrone','471','Read',
  'The Complete Works of H.P. Lovecraft','H.P. Lovecraft', '1112','Not Read',
  'The Shadow: The Golden Vulture', 'Lester Dent', '128','Not Read',
];


function Book(title, author, pages, read) {  // Constructor of books 
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.bookInfo = function() {
    return (this.title,'by',this.author,this.pages,'Pages','Status:',this.read)
  };
  // the constructor...
}


function addBookToLibrary(title,author,pages,read,newBook,library) { // Makes new books with the parameters taken in.
  this.newTitle = title;
  this.newAuthor = author;
  this.newPages = pages;
  this.newRead = read;
  newBook = (newTitle, newAuthor, newPages, newRead);
  myLibrary.push(newBook);
  // take params, create a book then store it in the array
  
}
const book1 = new addBookToLibrary('The Talented Mr Ripley','Patrica Highsmith','252','Reading');

