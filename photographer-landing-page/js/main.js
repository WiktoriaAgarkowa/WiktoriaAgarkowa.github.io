let close = document.getElementById('close'); 
let menuContainer = document.getElementById('hide_menu'); 
let menuItems = document.getElementsByClassName('hide_menu_item');

function hideMenu() {
    let menu = document.querySelector('.hide_list_menu');

    menu.classList.toggle('close_menu');
    close.classList.toggle('open');
}

menuContainer.addEventListener('click', hideMenu)


function swipe () {
    let mobileSlider = document.querySelector('.slider')
    let hideMenuContainer = document.getElementById('hide_menu')

    isFullyVisible(mobileSlider.children[0])

    for(let i=0; i<mobileSlider.children.length; i++){
        if(isPartiallyVisible(mobileSlider.children[i])) {
            hideMenuContainer.style.backgroundColor = 'transparent';
        } else {
            hideMenuContainer.style.backgroundColor = 'rgba(0,0,0,0.7)';
        }
    }
}

window.addEventListener('scroll', swipe, false)

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

    // console.log(top)
    // console.log(bottom)
    // console.log(window.innerHeight)

    return ((top >= 0) && (bottom <= window.innerHeight));

}

