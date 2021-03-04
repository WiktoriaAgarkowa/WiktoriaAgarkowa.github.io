let close = document.getElementById('close'); 
let menu = document.querySelector('.hide_list_menu');
let menuItems = document.getElementsByClassName('hide_menu_item')

const hideMenu = () => {
    menu.classList.toggle('close_menu');
    close.classList.toggle('open');
}

close.addEventListener('click', hideMenu)

for (let item of menuItems) {
    item.addEventListener('click', hideMenu)
}

function swipe () {
    let mobileSlider = document.querySelector('.slider')
    console.log(mobileSlider.children[1])

    isFullyVisible(mobileSlider.children[0])

    // if(isFullyVisible(mobileSlider.children[2])) {
    //     console.log('koniec')
    // } else if(isFullyVisible(mobileSlider.children[0])) {
    //     console.log('początek')
    // }
}
swipe();

function isPartiallyVisible(el) {
    let elementBoundary = el.getBoundingClientRect();

    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;
    let height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;

    console.log(top)
    console.log(bottom)
    console.log(window.innerHeight)

    return ((top >= 0) && (bottom <= window.innerHeight));

}

