let close = document.getElementById('close'); 
let menu = document.querySelector('.hide_list_menu');

const hideMenu = () => {
    menu.classList.toggle('close')
}

close.addEventListener('click', hideMenu)

console.log(menu)