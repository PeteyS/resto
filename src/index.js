import './style.css';
import mainPage from './mainPage';
import recipePage from './recipePage';
import contactPage from './contactPage';
import CoffeeIcon from './coffee.png';

const content  = document.getElementById('content');

const header = document.createElement('div');
const menu = document.createElement('div');
const home = document.createElement('div');
const recipe = document.createElement('div');
const contact = document.createElement('div');
const buffer = document.createElement('div');

const coffeeIcon = new Image();
coffeeIcon.src = CoffeeIcon;
coffeeIcon.classList.add('coffeeIcon');

let currentPage = 'mainPage';
let currentIndex = 1; //going to be used for animation

header.textContent = 'Coffee';
home.textContent = 'Home';
recipe.textContent = 'Recipes';
contact.textContent = 'Contact';

home.dataset.index = 1;
recipe.dataset.index = 2;
contact.dataset.index = 3;

header.classList.add('header');
menu.classList.add('menu');
home.classList.add('home');
recipe.classList.add('recipe');
contact.classList.add('contact');
buffer.classList.add('buffer');

menu.appendChild(home);
menu.appendChild(recipe);
menu.appendChild(contact);
header.appendChild(coffeeIcon);

header.appendChild(menu);
content.appendChild(header);
content.appendChild(buffer);
content.appendChild(mainPage());

function changeColor(change,revert1,revert2){
    change.style.background = '#6E260E';
    revert1.style.background = 'transparent';
    revert2.style.background = 'transparent';
}

home.addEventListener('click', ()=>{
    if (currentPage != 'mainPage'){
        content.removeChild(content.lastChild);
        content.appendChild(mainPage());
        header.textContent = 'Coffee';
        header.appendChild(menu);
        header.appendChild(coffeeIcon);
        currentPage = 'mainPage';
        changeColor(home,recipe,contact);
    }
});
recipe.addEventListener('click', ()=>{
    if(currentPage != 'recipePage'){
        content.removeChild(content.lastChild);
        content.appendChild(recipePage()); 
        header.textContent = 'Recipes';
        header.appendChild(menu);
        header.appendChild(coffeeIcon);
        currentPage = 'recipePage';
        changeColor(recipe,home,contact);
    }
});
contact.addEventListener('click', ()=>{
    if(currentPage != 'contactPage'){
        content.removeChild(content.lastChild);
        content.appendChild(contactPage());
        header.textContent = 'Contact';
        header.appendChild(menu);
        header.appendChild(coffeeIcon);
        currentPage = 'contactPage';
        changeColor(contact,recipe,home);

    }
});


