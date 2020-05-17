// Navigation bar on scrolling

const navbar = document.getElementById('navbar');
const logo = document.getElementById('logo');
const current = document.getElementById('current');
var options = document.getElementsByTagName('li');
const menu = document.getElementById('menu-wrap');

let scrolled = false;



window.onscroll = function(){
    if(window.pageYOffset > 100)
    {
        navbar.classList.add('nav-scroll');
        logo.firstChild.firstChild.classList.add('dark');
        navbar.firstChild.classList.add('index');
        menu.style.background = 'none';
        // console.log(check);
        
        if(!scrolled)
        {
            navbar.style.transform = "translateY(-70px)";
        }

        setTimeout(function()
        {
            navbar.style.transform = 'translateY(0)';
            scrolled = true;
        },200);
    }
    else
    {
        navbar.classList.remove('nav-scroll');
        logo.firstChild.firstChild.classList.remove('dark');
        
        scrolled = false;
    }
}