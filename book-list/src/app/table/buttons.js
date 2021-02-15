import {counter} from '../counter';

export const buttons = (x, y) => {

    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.classList.add('edit_btn');
    y.append(editButton);
    editButton.addEventListener('click', editBook);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'X';
    deleteButton.classList.add('delete_btn')
    y.append(deleteButton);

    deleteButton.addEventListener('click', ()=>{removeBookFromArray(x)})
    deleteButton.addEventListener('click', deleteBook)
};

function deleteBook(e) {
    const item = e.target;
    if (item.classList[0] === "delete_btn") {
        const book = item.parentElement;
        book.remove();
    }   
};

function removeBookFromArray(bookId) {
let bookArray = JSON.parse(localStorage.getItem("allBooks"));
const indexOfBookToDelete = bookArray.findIndex((book) => book.id === bookId);

bookArray = JSON.parse(localStorage.getItem("allBooks"));
bookArray.splice(indexOfBookToDelete,1);
localStorage.setItem("allBooks",JSON.stringify(bookArray));
counter();
};

function editBook (e) {
    console.log('działa')
    const item = e.target;
    const book = item.parentElement;
    if (!book.hasAttribute('contenteditable')){
        book.setAttribute('contenteditable', 'true');
        book.classList.add('edit');
        item.innerText = 'OK'
    } else {
        book.removeAttribute('contenteditable');
        book.classList.remove('edit');
        item.innerText = 'Edit'
    }

    
};
