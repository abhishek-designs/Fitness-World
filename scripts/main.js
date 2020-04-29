// Navigation bar on scrolling

const navbar = document.getElementById('navbar');
const logo = document.getElementById('logo');
const current = document.getElementById('current');
var head = document.querySelector('.main-head');
let scrolled = false;



window.onscroll = function(){
    if(window.pageYOffset > 100)
    {
        navbar.classList.add('nav-scroll');
        logo.firstChild.firstChild.classList.add('dark');
        
        
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