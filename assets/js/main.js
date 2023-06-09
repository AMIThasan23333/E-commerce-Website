/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav__menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

   
      if(navToggle) {
        navToggle.addEventListener("click", () => {
          navMenu.classList.add('show-menu')
        })
      }

      if(navClose) {
        navClose.addEventListener("click", () => {
          navMenu.classList.remove('show-menu')
        })
      }


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

   const login = document.getElementById('Login'),

        loginButton = document.getElementById('login-toggle'),
        loginClose = document.getElementById('Login-close')




/*===== LOGIN SHOW =====*/

if( loginButton) {
   loginButton.addEventListener("click", () => {
    login.classList.add('show-login')
  })
}

if(loginClose) {
   loginClose.addEventListener("click", () => {
   login.classList.remove('show-login')
 })
}


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

function scrollUp (){

  const scrollup= document.getElementById('scroll-up');

  if(this.scrollY >= 280) scrollup.classList.remove('show-scroll');
  else scrollup.classList.add('show-scroll')
}

window.addEventListener('scroll',scrollUp)
/*=============== LIGHT BOX ===============*/

   const productItems = document.querySelectorAll(".product__img"),
   totalProductItems = productItems.length,
   lightbox = document.querySelector(".lightbox")
   
   console.log(lightbox);

   lightboxImg = lightbox.querySelector(".lightbox__img")
   console.log(lightboxImg);
   lightboxClose = lightbox.querySelector(".lightbox__close")
   console.log(lightboxClose);
   lightboxCounter = lightbox.querySelector(".lightbox__counter")

   let itemIndex = 0;

   for(let i =0; i< totalProductItems; i++){

    
    productItems[i].addEventListener("click", function () {
      
      itemIndex = i;
      changeItem();
      toggleLightbox();


    })
   }


   function toggleLightbox ( ){

    lightbox.classList.toggle("open")
   }

   
    function changeItem(){


      imgSrc = productItems[itemIndex].querySelector(".product__img img").getAttribute("src")
    

      console.log(imgSrc);

      lightboxImg.src = imgSrc;
      lightboxCounter.innerHTML = (itemIndex + 1) + 'of' + totalProductItems;
}


 function nextItem(){
  if (itemIndex == totalProductItems-1){
    itemIndex = 0;
  }else {
    itemIndex++;
  }
 changeItem()
 }


 function prevItem(){

  if (itemIndex == 0){
    itemIndex = totalProductItems -1;


   }  else {

    itemIndex--;

  }
 changeItem()

 }
   

/*=============== QUESTIONS ACCORDION ===============*/

  const accordionItem = document.querySelectorAll('.questions__item')
  accordionItem.forEach((item) => {
  const accordionHeader = item.querySelector('.questions__header')
  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open')
    toggleItem(item)
    if(openItem && openItem !==item ){
      toggleItem(openItem)
    }
  })
})

 const toggleItem = (item) => {
 const accordionContent  = item.querySelector('.questions__content')
 if(item.classList.contains('accordion-open')){
 accordionContent.removeAttribute('style')
  item.classList.remove('accordion-open')
  }
     else  {
      accordionContent.style.height = accordionContent.scrollHeight + 'px';
      item.classList.add('accordion-open')
     }
 }




/*=============== STYLE SWITCHER ===============*/