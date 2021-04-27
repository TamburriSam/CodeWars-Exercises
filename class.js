let addBookBtn = document.querySelector(".addbtn");
let displayTitle = document.querySelector(".displayTitle");
let textBox = document.querySelector(".text-box");
let bookCard = document.querySelector(".bookcard");
let bookCardDisplay = document.querySelector(".afterfunctionbox");
let bookSubmit = document.querySelector(".bookSubmit");
let bookIcon = document.querySelector(".book");
let removeBtn = document.querySelector(".removebutton");
let contentBox = document.querySelector(".afterfunctionbox");
let totalBox = document.querySelector(".totalBox");
let totalHeading = document.querySelector(".totalbooks");
let bookForm = document.querySelector(".bookform");
let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  totalBook() {
    return this.title;
  }
}

//factory
class Store {
  //use this to get whatever is in local storage
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
      shiftElements();
      displayTitle.style.display = "none";
    }

    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();

    books.forEach(function (book) {
      //const newBook = new Book(book);

      addToLs(book);
    });
  }

  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook() {}
}

document.addEventListener("DOMContentLoaded", Store.displayBooks());

class makeBook {
  shiftElements() {
    bookIcon.style.gridColumn = "3";
    addBookBtn.style.gridColumn = "3";

    totalBox.style.display = "block";
    totalHeading.style.display = "block";
    totalBox.innerHTML = myLibrary.length;
  }

  addBookToLibrary(title, author, pages, read) {
    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    pages = document.getElementById("pages").value;
    read = document.getElementById("checkbox").checked;
    userInput = new Book(title, author, pages, read);
    myLibrary.push(userInput);

    return userInput;
  }

  renderElements() {
    contentBox.style.display = "flex";
    let div1 = document.createElement("div");
    div1.classList.add("bookcard");
    div1.style.display = "block";
  
    let title = document.createElement('div');
    title.classList.add('title');
    div1.appendChild(title);
  
  
    bookCardDisplay.appendChild(div1);
  }

  addToLs(book) {
    contentBox.style.display = "flex";
    let div1 = document.createElement("div");
    div1.classList.add("bookcard");
    div1.style.display = "block";

    let title = document.createElement("div");
    title.classList.add("title");
    div1.appendChild(title);

    bookCardDisplay.appendChild(div1);

    title.innerHTML = JSON.stringify(book[book.length - 1])
      .split('"')
      .join(" ")
      .replace(/[^\w\s]/gi, "");
  }
}
