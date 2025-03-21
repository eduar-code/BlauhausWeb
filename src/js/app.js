document.addEventListener('DOMContentLoaded', function () {

  eventListenersNav();
  eventListenersMenu();
  //darkMode();
});




function eventListenersNav() {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.addEventListener('click', navegationResponsiveNav);
}

function navegationResponsiveNav() {
  const navegation = document.querySelector('.navigation-option');

  if (navegation.classList.contains('show')) {
    navegation.classList.remove('show');
  } else {
    navegation.classList.add('show');
  }

  //navegacion.classList.toggle('mostrar');
}



function eventListenersMenu() {
  const products = document.querySelectorAll('.mobile-menu_v');
 //products.addEventListener('click', navegationResponsiveMenu);

 products.forEach(products => {
  products.addEventListener('click', () => {
    const targetDiv = document.getElementById(products.dataset.target);
    console.log(targetDiv);
    if(targetDiv.classList.contains('showMenu')){
      targetDiv.classList.remove('showMenu');
    }else{
      targetDiv.classList.add('showMenu');
    }

  });
 });
 
}


// function navegationResponsiveMenu() {
//   const navegacionMenu = document.querySelector('.produc-price_info');

//   if(navegacionMenu.classList.contains('showMenu')){
//     navegacionMenu.classList.remove('showMenu');
//   }else{
//     navegacionMenu.classList.add('showMenu');
//   }
// }


// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}