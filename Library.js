
const myLibrary = [];

function Book(title,author,pages,read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.bookInfo = function() {
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
const book1 = new Book('Behold Humanity!: May We Come In?','Ralts Bloodthrone','471','Read');
const book2 = new Book('The Complete Works of H.P. Lovecraft', 'H.P. Lovecraft', '1112','Not Read');
const book3 = new Book('The Shadow: The Golden Vulture', 'Lester Dent', '128','Not Read');

book1.bookInfo();
book2.bookInfo();
book3.bookInfo();
