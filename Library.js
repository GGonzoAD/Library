const myLibrary = [  // My Array of Books
  'Behold Humanity!: May We Come In?','Ralts Bloodthrone','471','Science Fiction','2021','Read',
  'The Complete Works of H.P. Lovecraft','H.P. Lovecraft', '1112','Weird Fiction','2011','Not Read',
  'The Shadow: The Golden Vulture', 'Lester Dent','128','Pulp Fiction','2006','Not Read',
];


function Book(title, author, pages, genre, publicationDate ,read,id) {  //Constructor of books 
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.genre = genre;
  this.publicationDate = publicationDate;
  this.id = crypto.randomUUID();
  // the constructor...
}
Book.prototype.bookInfo = function() { 
  console.log (this.title,'by',this.author,this.pages,'Pages','Genre:',this.genre,'Year Published:',this.publicationDate,'Status:',this.read,'ID:',this.id)
  return (this.title,'by',this.author,this.pages,'Pages','Genre',this.genre,'Year Published:',this.publicationDate,'Status:',this.read,'ID:',this.id)
};

const book2 = new Book ('The Talented Mr Ripley','Patrica Highsmith','252','Noir','1955','Not Reading');
book2.bookInfo();

function addBookToLibrary() { // take params, create a book then store it in the array

}

addBookToLibrary.prototype.addToLib = function() {

  myLibrary.push(this.title,'by',this.author,this.pages,'Pages','Genre',this.genre,'Year Published:',this.publicationDate,'Status:',this.read,'ID:',this.id)
  console.table(myLibrary)

};
Object.setPrototypeOf(Book.prototype, addBookToLibrary.prototype);
book2.addToLib();

function displayBook(args){
  let myBooks = "";
  for (let i = 0; i < args.length; i++){
    items += '<li>$myLibrary[i]<li>';
  }
  return myBooks
}

document.querySelector("main").innerHTML = `
<ol>
$[displayBook(myLibrary)]
</ol>
`;