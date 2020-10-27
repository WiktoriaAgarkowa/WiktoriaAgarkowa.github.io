const inputs = document.querySelectorAll('.variables input');

console.log(inputs);

function handleUpdate() {
    const suffix = this.dataset.sizing || '';

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

    if(this.name === 'background') {

        let i = this.previousElementSibling;
        let base = i.previousElementSibling;

        document.documentElement.style.setProperty(`--${this.name}`, 'linear-gradient' + `(${base.value}, ${this.value})`)
    }

}  

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))
