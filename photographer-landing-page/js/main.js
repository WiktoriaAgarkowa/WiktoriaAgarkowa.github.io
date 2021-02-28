let close = document.getElementById('close'); 
let menu = document.querySelector('.hide_list_menu');
let menuItems = document.getElementsByClassName('hide_menu_item')

const hideMenu = () => {
    menu.classList.toggle('close');
    close.classList.toggle('open');
}

close.addEventListener('click', hideMenu)

for (let item of menuItems) {
    item.addEventListener('click', hideMenu)
}
