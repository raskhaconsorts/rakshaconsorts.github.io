const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navlinks");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// modal bax mechanism
/*var modalBtn = document.getElementsByClassName("modal-btn")
var modal = document.querySelector(".modal")
var closeBtn = document.querySelector(".close-btn")
modalBtn.onclick = function(){
  modal.style.display = "block"
}
closeBtn.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}
*/

/*
// modal popups for multiplie buttons
// get the modal 
var modal= document.getElementById('myModal');

// get the button that opens modal pop up
var btns = document.getElementsByClassName("myBtn");

// get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// when the user clicks the button ,open modal
    for(var i = 0; i< btns.length; i++){
        btns[i].onclick= function(){
            modal.style.display="block";
        }
    }
    
// when the user clicks on <span> , close the window
            span.onclick =  function(){
            modal.style.display = "none";
            }                

// when the user clicks any where outside of the modal close it

             window.onclick = function(){
                 if(event.target == modal){
                     modal.style.display = "none";
                 }
             }


*/

let buttons = document.querySelectorAll('button');
let modals = document.querySelectorAll('.modal');

function showModal(id) {
  let m = document.getElementById(id);
  m.classList.add('visible');
}

function hideModals() {
  modals.forEach(m => {
    m.classList.remove('visible');
  });
}

buttons.forEach(b => {
  b.addEventListener('click', event => {
    hideModals();
    showModal(b.dataset.modal);
  });
});

modals.forEach(m => {
  let x = m.querySelector('button.close');
  x.addEventListener('click', hideModals);
});
 window.onclick = function(){
                 if(event.target == modals){
                     modals.style.display = "none";
                 }
             }