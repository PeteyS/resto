import './style.css';
import mainPage from './mainPage';
import recipePage from './recipePage';
import contactPage from './contactPage';

let content  = document.getElementById('content');

let header = document.createElement('div');
let menu = document.createElement('div');
let home = document.createElement('div');
let recipe = document.createElement('div');
let contact = document.createElement('div');
let buffer = document.createElement('div');

let currentPage = 'mainPage';
let currentIndex = 1;

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
        currentPage = 'mainPage';
        changeColor(home,recipe,contact);
    }
});
recipe.addEventListener('click', ()=>{
    if(currentPage != 'recipePage'){
        content.removeChild(content.lastChild);
        content.appendChild(recipePage()); 
        currentPage = 'recipePage';
        changeColor(recipe,home,contact);
    }
});
contact.addEventListener('click', ()=>{
    if(currentPage != 'contactPage'){
        content.removeChild(content.lastChild);
        content.appendChild(contactPage());
        currentPage = 'contactPage';
        changeColor(contact,recipe,home);

    }
});


