let elem = document.querySelectorAll('li');
let res = document.querySelector('p');
let but = document.querySelector('button');
let sum = 0
for (let elems of elem) {
  if (elems.textContent.toString().split('').reduce((a, b) => +a + +b) == 6) {
    sum += +elems.textContent;
  }
}
but.addEventListener('click', () => {
  res.textContent = sum;
})









