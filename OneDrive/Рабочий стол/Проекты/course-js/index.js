
let p = document.querySelectorAll('.qwe');
for (let elem of p) {
  elem.addEventListener('click', func)
}
function func() {
  this.textContent = this.textContent + '!'
  this.removeEventListener('click', func)
}







