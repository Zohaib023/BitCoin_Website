const navMenu = document.getElementById('nav-menu'),
     navToogle = document.getElementById('nav-toogle'),
     navClose = document.getElementById('nav__close')

/*========MENU SHOW ======*/
/* VALIDAGTE IF CONSTANT EXISTS */
if(navToogle){
    navToogle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
/*=== MENU HIDDEN =====*/
/*===== VALIDATE IF CONSTANT EXISTS */
if(navClose){
    navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
    })
}
/*====REMOVE MENU MOBILE====*/
const navLink = document.querySelectorAll( 'nav__link')

const linkAction = () =>{
  const NavMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))