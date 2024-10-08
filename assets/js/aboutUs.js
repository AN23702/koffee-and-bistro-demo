// scroll header
const header = document.querySelector(".header")

window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
});

// sub menu
const menu = document.querySelector(".menu");
const subMenuLv1 = document.querySelector(".sub-menu-lv1");

let isShown = false;

menu.addEventListener('click', () => {
  isShown = !isShown;
  subMenuLv1.style.display = isShown ? 'block' : 'none';
});

document.addEventListener('click', (event) => {
  // Kiểm tra xem có click vào phần tử A hay không
  if (event.target !== menu) {
    isShown = false;
    subMenuLv1.style.display = 'none';
  }
});

// back to top bar
window.onscroll = function() {
    if (window.pageYOffset > 0) {
      document.querySelector('.back-to-top-bar').style.right = '20px';
    } else {
      document.querySelector('.back-to-top-bar').style.right = '-9999px';
    }
  };

// mini game
const openMiniGame = document.querySelector('.mini-game');
const closeMiniGame = document.querySelector('.close-mini-game');
const miniGameContent = document.querySelector('.mini-game-content');

openMiniGame.addEventListener('click', () => {
  miniGameContent.style.transform = 'scale(1, 1)';
});

closeMiniGame.addEventListener('click', () => {
  miniGameContent.style.transform = 'scale(0, 0)';
});

// about us title
var textWrapper = document.querySelector('.about-us-title');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.about-us-title .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.about-us-title .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });