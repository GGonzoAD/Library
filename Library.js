const myLibrary = [  // My Array of Books
  'Behold Humanity!: May We Come In?','Ralts Bloodthrone','471','Science Fiction','2021','Read',
  'The Complete Works of H.P. Lovecraft','H.P. Lovecraft', '1112','Weird Fiction','2011','Not Read',
  'The Shadow: The Golden Vulture', 'Lester Dent','128','Pulp Fiction','2006','Not Read',
];


function Book(title, author, pages, genre, publicationDate ,read) {  //Constructor of books 
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.genre = genre;
  this.publicationDate = publicationDate;
  // the constructor...
}
Book.prototype.bookInfo = function() {
  //console.log (this.title,'by',this.author,this.pages,'Pages','Genre:',this.genre,'Year Published:',this.publicationDate,'Status:',this.read)
  return (this.title,'by',this.author,this.pages,'Pages','Genre',this.genre,'Year Published:',this.publicationDate,'Status:',this.read)
};

const book2 = new Book ('The Talented Mr Ripley','Patrica Highsmith','252','Noir','1955','Not Reading');
book2.bookInfo();

function addBookToLibrary() { //add book to library with the parameters taken in.
  
}


