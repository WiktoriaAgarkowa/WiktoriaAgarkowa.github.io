import {buttons} from './buttons';
import {list} from '../global_variables';

let bookArray = JSON.parse(localStorage.getItem("allBooks"));
let filterAuthor = document.querySelector('.filter_author');
let filterPriority = document.querySelector('.filter_priority');
let filterCategory = document.querySelector('.filter_category');

const filterArray = (array, fields, value) => {
    fields = Array.isArray(fields) ? fields : [fields];
    
    let newArray = array.filter((item) => fields.some((field) => item[field].includes(value)));

    list.innerHTML = '';

    if(newArray.length > 0) {
            newArray.map(book => {
                let trElement = document.createElement('tr');

                trElement.innerHTML = ` <td>${book.title}</td><td> ${book.author}</td> <td>${book.category}</td> <td> ${book.priority}</td>`;
        
                list.append(trElement);
        
                buttons(book.id, trElement)
    
            })
    };
};


filterAuthor.addEventListener('change', (e)=>{filterArray(bookArray, ['author'], e.target.value)})

filterCategory.addEventListener('change', (e)=>{filterArray(bookArray, ['category'], e.target.value)})

filterPriority.addEventListener('change', (e)=>{filterArray(bookArray, ['priority'], e.target.value)})



