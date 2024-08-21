// banner
$('.fix-banner').owlCarousel({
    loop:true,
    margin:0,
    autoplay: true,
    autoplayTimeout: 3000,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },
        1500:{
            items:1
        }
    }
})

// best seller
$('.best-seller-banner').owlCarousel({
    loop:true,
    dots:false,
    autoplay: true,
    autoplayTimeout: 3000,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        770:{
            items:4
        },
        1500:{
          items:4
      }
    }
})

// best seller title
var textWrapper = document.querySelector('.best-seller-title .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.best-seller-title .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml7',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

//   slide store
$('.slide-store').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// store img slide
$('.store-img-slide').owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

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

// document.addEventListener('click', (event) => {
//   if (event.target !== openMiniGame && event.target !== miniGameContent) {
//     miniGameContent.style.transform = 'scale(0, 0)';
//   }
// });