import './style.css';
import Coffee from './coffeeSplash.png';

export default function mainPage(){
    let container = document.createElement('div');
    container.classList.add("mainPage");

    let hours = document.createElement('div');
    let hoursH2 = document.createElement('h2');
    hoursH2.textContent = 'Hours';
    hoursH2.classList.add('hoursH2');
    hours.classList.add('hours');

    let hoursList = document.createElement('ul');
    let daysList = []
    let days = ['Monday','Tueday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    for(let i = 0;i<7;i++){
        daysList[i] = document.createElement('ul');
        daysList[i].textContent = days[i] + ': 8:30am - 3pm';
        hoursList.appendChild(daysList[i]);
    }
    hours.appendChild(hoursH2);
    hours.appendChild(hoursList);

    let blurb = document.createElement('div');
    blurb.classList.add('blurb');

    container.appendChild(hours);
    container.appendChild(blurb);

    return container;
}


