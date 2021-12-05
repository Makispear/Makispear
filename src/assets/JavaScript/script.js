let prevScrollPos = window.pageYOffset;
window.onscroll = () => {
let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementsByTagName('header')[0].style.top = "0";
  } else {
    document.getElementsByTagName('header')[0].style.top = "-500px";
  }
  prevScrollPos = currentScrollPos;
}

let moreBtn = document.querySelector('.more')
moreBtn.addEventListener('click', () => {
  window.open('https://github.com/Makispear?tab=repositories', '_blank')
})