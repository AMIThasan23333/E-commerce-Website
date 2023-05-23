/*=============== SHOW MENU ===============*/


/*===== MENU SHOW =====*/
/* Validate if constant exists */


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


/*=============== SHOW CART ===============*/


 const cart = document.getElementById('cart');

 cartShop =document.getElementById('cart-shop')

 cartClose = document.getElementById('cart__close')



/*===== CART SHOW =====*/
/* Validate if constant exists */
if(cartShop) {
  cartShop.addEventListener("click", () => {
    cart.classList.add('show-cart')
  })
}


if(cartClose) {
  cartClose.addEventListener("click", () => {
    cart.classList.remove('show-cart')
  })
}


/*===== CART HIDDEN =====*/
/* Validate if constant exists */


/*=============== SHOW LOGIN ===============*/


/*===== LOGIN SHOW =====*/
/* Validate if constant exists */


/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */


/*=============== HOME SWIPER ===============*/


  var homeSwiper = new Swiper (".home-swiper", {
    spaceBetween : 30,
    Loop: 'true',
    pagination : {
        el: ".swiper-pagination",
        clickable: true,
    }

  })




/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader() {

    const header = document.getElementById('header')

    if(this.scrollY >= 50 ) header.classList.add("scroll-header");
    else header.classList.remove('scroll-header');
}

window.addEventListener("scroll", scrollHeader)

/*=============== NEW SWIPER ===============*/

var newSwiper = new Swiper (".new-swiper", {
  spaceBetween : 10,
  slidePerview : "auto",
  centeredSlides: true,
  Loop: 'true',
  pagination : {
      el: ".swiper-pagination",
      clickable: true,
  }

})
/*=============== SHOW SCROLL UP ===============*/ 


/*=============== LIGHT BOX ===============*/


/*=============== QUESTIONS ACCORDION ===============*/


/*=============== STYLE SWITCHER ===============*/