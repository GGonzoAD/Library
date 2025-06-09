const myLibrary = [  // My Array of Books
  'Behold Humanity!: May We Come In?','Ralts Bloodthrone','471','Science Fiction','2021','Read',
  'The Complete Works of H.P. Lovecraft','H.P. Lovecraft', '1112','Weird Fiction','2011','Not Read',
  'The Shadow: The Golden Vulture', 'Lester Dent','Pulp Fiction','2006','128','Not Read',
];


function Book(title, author, pages, genre, publicationDate ,read) {  // Constructor of books 
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.genre = genre;
  this.publicationDate = publicationDate;
  this.bookInfo = function() {
    console.log (this.title,'by',this.author,this.pages,'Pages','Genre:',this.genre,'Year Published:',this.publicationDate,'Status:',this.read)
    return (this.title,'by',this.author,this.pages,'Pages','Genre',this.genre,'Year Published:',this.publicationDate,'Status:',this.read)
  };
  // the constructor...
}
const book2 = new Book ('The Talented Mr Ripley','Patrica Highsmith','252','Noir','1955','Not Reading');
book2.bookInfo();
myLibrary.bookInfo();

function addBookToLibrary(title, author, pages, genre, publicationDate, read) { // Makes new books with the parameters taken in.
  this.newTitle = title;
  this.newAuthor = author;
  this.newPages = pages;
  this.newGenre = genre;
  this.newPublicationDate = publicationDate;
  this.newRead = read;
  
  this.newBook = function(){
    myLibrary.push(this.newTitle,'by',this.newAuthor,this.newPages,'Pages','Genre:',this.newGenre,'Year Published:',this.newPublicationDate,'Status:',this.newRead)
  };
  
  // take params, create a book then store it in the array
}

const book1 = new addBookToLibrary('The Talented Mr Ripley','Patrica Highsmith','252','Noir','1955','Not Reading');
book1.newBook();
console.table(myLibrary);