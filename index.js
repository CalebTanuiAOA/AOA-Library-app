const yearEl = document.getElementById("year");
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}
function book(Title, Author, Genre, Year, ISBN) {
    this.Title = Title;
    this.Author = Author;
    this.Genre = Genre;
    this.Year = Year;
    this.ISBN = ISBN;
    }

function student(Name, ID, yearjoined, Email) {
    this.Name = Name;
    this.ID = ID;
    this.yearjoined = yearjoined;
    this.Email = Email;
    }

let students = [];
let books = [];

function addStudent(Name, ID, yearjoined, Email) {
    let newStudent = new student(Name, ID, yearjoined, Email);
    students.push(newStudent);
    console.log("Student added:", newStudent);
}
