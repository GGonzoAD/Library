
const myLibrary = [];

function Book(title,author,pages,read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.findBook = function() {
    console.log(this.title)
    console.log(this.author)
    console.log(this.pages)
    console.log(this.read)
  }
  // the constructor...
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
  
}