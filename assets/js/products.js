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

// background color active
const allColorActive = document.getElementById('allColorActive');
const coffeeColorActive = document.querySelector('.coffee-color-active');
const teaColorActive = document.querySelector('.tea-color-active');
const freezeColorActive = document.querySelector('.freeze-color-active');
const phindiColorActive = document.querySelector('.phindi-color-active');
const espressoColorActive = document.querySelector('.espresso-color-active');
const cakeColorActive = document.querySelector('.cake-color-active');

const topBar = document.querySelector('.top-bar');
const menuProducts = document.querySelector('.menu-products');
const footer = document.querySelector('.footer');
const backToTopBar = document.querySelector('.back-to-top-bar');
const messenger = document.querySelector('.messenger');


function changeColor(activeColor) {
  topBar.style.backgroundColor = activeColor === 'all' ? '#634832' :activeColor === 'coffee' ? '#634832' :activeColor === 'tea' ? '#00712D' :activeColor === 'freeze' ? '#6DC5D1' :activeColor === 'phindi' ? '#CA955C' :activeColor === 'espresso' ? '#000' :activeColor ==='cake' ? '#FABC3F' : '#634832';
  menuProducts.style.backgroundColor = activeColor === 'all' ? '#634832' :activeColor === 'coffee' ? '#634832' :activeColor === 'tea' ? '#00712D' :activeColor === 'freeze' ? '#6DC5D1' :activeColor === 'phindi' ? '#CA955C' :activeColor === 'espresso' ? '#000' :activeColor ==='cake' ? '#FABC3F' : '#634832';
  footer.style.backgroundColor = activeColor === 'all' ? '#634832' :activeColor === 'coffee' ? '#634832' :activeColor === 'tea' ? '#00712D' :activeColor === 'freeze' ? '#6DC5D1' :activeColor === 'phindi' ? '#CA955C' :activeColor === 'espresso' ? '#000' :activeColor ==='cake' ? '#FABC3F' : '#634832';
  backToTopBar.style.backgroundColor = activeColor === 'all' ? '#634832' :activeColor === 'coffee' ? '#634832' :activeColor === 'tea' ? '#00712D' :activeColor === 'freeze' ? '#6DC5D1' :activeColor === 'phindi' ? '#CA955C' :activeColor === 'espresso' ? '#000' :activeColor ==='cake' ? '#FABC3F' : '#634832';
  messenger.style.backgroundColor = activeColor === 'all' ? '#634832' :activeColor === 'coffee' ? '#634832' :activeColor === 'tea' ? '#00712D' :activeColor === 'freeze' ? '#6DC5D1' :activeColor === 'phindi' ? '#CA955C' :activeColor === 'espresso' ? '#000' :activeColor ==='cake' ? '#FABC3F' : '#634832';

  // Lưu trữ trạng thái màu sắc rõ ràng
  localStorage.setItem('activeColor', activeColor);
}
allColorActive.addEventListener('click', ()=>{
  changeColor('all');
});

coffeeColorActive.addEventListener('click', () => {
  changeColor('coffee');
});

teaColorActive.addEventListener('click', () => {
  changeColor('tea');
});

freezeColorActive.addEventListener('click', () => {
  changeColor('freeze');
});

phindiColorActive.addEventListener('click', () => {
  changeColor('phindi');
});

espressoColorActive.addEventListener('click', () => {
  changeColor('espresso');
});

cakeColorActive.addEventListener('click', () => {
  changeColor('cake');
});

// ... tương tự cho các màu khác

window.onload = () => {
  const activeColor = localStorage.getItem('activeColor');
  if (activeColor) {
    changeColor(activeColor);  // Gọi hàm để áp dụng màu đã lưu
  }
};