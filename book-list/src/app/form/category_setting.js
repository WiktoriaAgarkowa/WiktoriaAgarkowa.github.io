import { counter } from "../counter";

const addBtn = document.getElementById('add_category_btn');
addBtn.addEventListener('click', addCategory);

function addCategory() {

    const inputCategory = document.querySelector('.add_category');

    if(inputCategory.classList[1] !== 'open') {
        inputCategory.classList.add('open'); 
    } if(inputCategory.value === '') {
        return
    } else {
        let category = document.getElementById('category');
        let newOption = document.createElement('option');
        newOption.innerText = `${inputCategory.value}`;
        category.append(newOption);
        newOption.selected = true;
        inputCategory.value = ''; 
    }

}