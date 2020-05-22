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

// Adding the TypeWriter Effect on the landing page
const TypeWriter = function(txtElement,words,waitTime)
{
    this.txtElement = txtElement;
    this.words = words;
    this.waitTime = parseInt(waitTime,10);
    this.txt = '';
    this.wordIndex = 0;
    this.type();
    this.isDeleting = false;
}

// type function which performs the typing operation
TypeWriter.prototype.type = function()
{
    // fetching the current index of word
    const current = this.wordIndex % this.words.length;
    
    // fetching the full word by index
    const fullTxt = this.words[current];
    
    // checking the deletion state
    if(this.isDeleting)
    {
        // remove a character
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    }
    else
    {
        // add a character
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Setting the speed of the type writer effect
    let typeSpeed = 200;

    // Setting the speed according to the deletion state
    if(this.isDeleting)
    {
        typeSpeed/= 2; // deletion speed increases
    }
    if(!this.isDeleting && this.txt === fullTxt)
    {
        typeSpeed = this.waitTime;
        this.isDeleting = true;
    }
    else if(this.isDeleting && this.txt === '')
    {
        typeSpeed = 200;
        this.wordIndex++;
        this.isDeleting = false;
    }

    // Inserting the words in the span
    this.txtElement.innerHTML = '<span class="txt">'+this.txt+'</span>';

    // type writer repetation
    setTimeout(() => {this.type();},typeSpeed);
}

// Function initialization when page loads
document.addEventListener('DOMContentLoaded',init);

// init function
function init()
{
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const waitTime = txtElement.getAttribute('data-wait');

    new TypeWriter(txtElement,words,waitTime);
}