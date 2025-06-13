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
  this.info = function() {
    return this.name + "" + this.author + "" + this.pages + "" + this.read + "" + this.genre + "" + this.publicationDate + "" + this.id;
  };
  // the constructor...
}

function addBookToLibrary(title, author, pages, genre, publicationDate, read, id) { // take params, create a book then store it in the array
 const newBook = new Book(title, author, pages, genre, publicationDate ,read,id);
 myLibrary.push(newBook); 
}


function displayBook(arg){
  let myBooks = "";
  for (let i = 0; i < arg.length; i++){
    myBooks += `<li>${arg[i]}<li>`;
  }
  return myBooks;
}

document.querySelector("main").innerHTML = `
<ol>
${displayBook(myLibrary)}
</ol>
`;