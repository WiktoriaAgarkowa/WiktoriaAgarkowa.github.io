let panels = document.querySelectorAll('.panel');

function activePanel() {
    this.classList.toggle('panel-open');
}

function activeText(e) {
    
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('text-active')
    }
}


panels.forEach(panel => panel.addEventListener('click', activePanel));

panels.forEach(panel => panel.addEventListener('transitionend', activeText))