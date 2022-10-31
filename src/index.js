import './style.css';
import icon from './images/icon.svg';
import menuPage from './menu.js';
import reservePage from './reserve';
import locationPage from './location.js';


const content = document.querySelector('#content');

//* header creation *//
const header = document.createElement('div');
header.classList.add('header');
content.appendChild(header);

  //* icon *//
  const myIcon = new Image();
  myIcon.src = icon;
  myIcon.classList.add('filter-bw');
  myIcon.style.objectFit = 'contain';
  header.appendChild(myIcon);

  //* button bar creation *//
  const buttonBar = document.createElement('div');
  buttonBar.classList.add('linkBar');
  header.appendChild(buttonBar);

    //* creating the buttons *//
    const btn1 = document.createElement('button');
    btn1.classList.add('link');
    btn1.textContent = 'Home';
    btn1.onclick = homePage;
    buttonBar.appendChild(btn1);

    const btn2 = document.createElement('button');
    btn2.classList.add('link');
    btn2.textContent = 'Menu';
    btn2.onclick = menuPage;
    buttonBar.appendChild(btn2);

    const btn3 = document.createElement('button');
    btn3.classList.add('link');
    btn3.textContent = 'Reservations';
    btn3.onclick = reservePage;
    buttonBar.appendChild(btn3);

    const btn4 = document.createElement('button');
    btn4.classList.add('link');
    btn4.textContent = 'Location';
    btn4.onclick = locationPage;
    buttonBar.appendChild(btn4);


//* main page* //
function mainPage() {
const main = document.createElement('div');
main.classList.add('main');
content.appendChild(main);
main.style.display = 'flex';

  //* logo creation *//
  const logo = document.createElement('div');
  logo.classList.add('logo');
  logo.textContent = 'Hometown Cravings';
  main.appendChild(logo);

  //* intro piece *//
  const intro = document.createElement('div');
  intro.classList.add('intro');
  intro.innerHTML = 
  'Get a taste of authentic South East Asian cuisine,' + '<br>' +
  ' a taste of home away from home.';
  main.appendChild(intro);
 

  //* reservation button *//
  const mainBtn = document.createElement('button');
  mainBtn.classList.add('mainBtn');
  mainBtn.textContent = 'Make Your Reservation Now!';
  mainBtn.onclick = reservePage;
  main.appendChild(mainBtn);
}

//* clicking on home page *//
function homePage() {
  content.removeChild(content.children[1]);
  mainPage();
}

mainPage();