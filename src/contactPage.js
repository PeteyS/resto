import './style.css';
export default function contactPage(){
    let container = document.createElement('div');
    container.classList.add("mainPage");

    let hours = document.createElement('div');

    hours.classList.add('hours');

    container.appendChild(hours);

    return container;
}