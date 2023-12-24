let elem = document.querySelector('#qwe')
let button = document.querySelector('#eee')

button.addEventListener('click', () => {
    elem.textContent = Number(elem.textContent) + 1
    console.log(elem.textContent);
})
