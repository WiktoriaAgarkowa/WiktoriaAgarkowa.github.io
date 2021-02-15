import {counter} from '../counter';
import {buttons} from '../table/buttons';

let form = document.querySelector('form');
const list = document.getElementById('book_list');

const addBook = e => {

    e.preventDefault();
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let category = document.getElementById('category');
    let radios = document.getElementsByName('priority');

    for (var i = 0, length = radios.length; i < length; i++) {

        if (radios[i].checked) {

        var newBook = {
            id: Date.now(),
            title: title.value,
            author: author.value,
            category: category.value,
            priority: radios[i].value
        }

        let trElement = document.createElement('tr');

        trElement.innerHTML = ` <td>${newBook.title}</td><td> ${newBook.author}</td> <td>${newBook.category}</td> <td> ${newBook.priority}</td>`;

        list.append(trElement);

        //LOCALSTORAGE

        var existBookArray = JSON.parse(localStorage.getItem("allBooks"));
        if(existBookArray == null) existBookArray = [];

        localStorage.setItem("book", JSON.stringify(newBook));
        existBookArray.push(newBook);
        localStorage.setItem("allBooks", JSON.stringify(existBookArray));


        buttons(newBook.id, trElement)

        //CLEAR FIELDS
        title.value = '';
        author.value = '';

        break;

        }
    }

    counter();
}

const validateForm = e => {
    e.preventDefault();
    if (title.value === "" ) {
        title.classList.add('error')
    } if (author.value === "") {
        author.classList.add('error');
    } else {
        author.classList.remove('error');
        title.classList.remove('error')
        addBook(e);

    }
}

form.addEventListener('submit', validateForm)
