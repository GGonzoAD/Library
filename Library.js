
const myLibrary = [
  'Behold Humanity!: May We Come In?','Ralts Bloodthrone','471','Read',
  'The Complete Works of H.P. Lovecraft','H.P. Lovecraft', '1112','Not Read',
  'The Shadow: The Golden Vulture', 'Lester Dent', '128','Not Read'
];
for(let i = 0; i < myLibrary.length; i++){
  console.log(myLibrary[i]);
}
function Book(title,author,pages,read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.bookInfo = function() {
    console.log(this.title,'by',this.author,this.pages,'Pages','Status:',this.read)
  }
  // the constructor...
}

function addBookToLibrary(title,author,pages,read,newBook) {
  title = title;
  author = author;
  pages = pages;
  read = read;
  newBook = title, author, pages, read;
  myLibrary.push(newBook);
  // take params, create a book then store it in the array
  
}
