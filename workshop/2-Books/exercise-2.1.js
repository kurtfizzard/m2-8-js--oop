// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

class Book {
  constructor(title, genre, author, isRead) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.isRead = isRead;

    if (isRead) {
      this.isRead = isRead;
    } else {
      this.isRead = false;
    }
  }
}

let book1 = new Book(
  "Catcher In The Rye",
  "Coming-of-Age Story",
  "J.D. Sallinger",
  true
);
let book2 = new Book("The Rum Diary", "Adventure", "Hunter S. Thompson", true);
let book3 = new Book("Slaughterhouse 5", "Satire", "Kurt Vonnegut", true);
let book4 = new Book(
  "The Wind Up Bird Chronicle",
  "Fantasy",
  "Haruki Murakami",
  true
);
let book5 = new Book("Satori In Paris", "Fiction", "Jack Kerouac");

console.log(book1, book2, book3, book4, book5);
