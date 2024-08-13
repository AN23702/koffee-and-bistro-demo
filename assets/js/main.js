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