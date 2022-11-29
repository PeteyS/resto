import './style.css';
export default function recipePage(){
    let container = document.createElement('div');
    container.classList.add("mainPage");

    let blurb1 = document.createElement('div');
    let blurb2 = document.createElement('div');
    let blurb3 = document.createElement('div');
    let blurb4 = document.createElement('div');

    blurb1.classList.add('topBlurb');
    blurb2.classList.add('blurb');
    blurb3.classList.add('blurb');
    blurb4.classList.add('blurb');


    container.appendChild(blurb1);

    container.appendChild(blurb2);

    container.appendChild(blurb3);

    container.appendChild(blurb4);

    return container;
}