import './style.css';
import icon from './images/icon.svg';
import menuPage from './menu.js';
import reservePage from './reserve';
import backgroundimage from './images/restaurant-kristian-angelo-unsplash.jpg';
import gitimg from './images/github.svg';

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
  myIcon.onclick = homePage;
  const topLink = document.createElement('a');
  topLink.id = 'top';
  header.appendChild(topLink);
  topLink.appendChild(myIcon);

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
    buttonBar.appendChild(btn4);
        const btn4link = document.createElement('a');
        btn4link.href = '#location';
        btn4link.textContent = 'Location';
        btn4.appendChild(btn4link);


//* main page* //
function mainPage() {
  document.body.style.background = 'url(' + backgroundimage + ')';
  document.body.style.backgroundSize = '1900px';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundColor = '#040d0c';
  document.body.style.backgroundAttachment = 'fixed';

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
  document.body.style.background = 'url(' + backgroundimage + ')';
  document.body.style.backgroundSize = '1900px';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundColor = '#040d0c';
  document.body.style.backgroundAttachment = 'fixed';

  content.removeChild(content.children[1]);
  mainPage();
}

//* location creation *//
const loCont = document.createElement('loCont')
document.body.appendChild(loCont);
const loText = document.createElement('loText');
loCont.appendChild(loText);
const loHeader = document.createElement('a');
loHeader.id = 'location';
loHeader.textContent = 'Location Details';
loText.appendChild(loHeader);
const loPh = document.createElement('div');
loPh.textContent = 'Phone: 012 - 345 - 6789';
loText.appendChild(loPh);
const loAdd = document.createElement('div');
loAdd.textContent = 'Address: Houston, TX'
loText.appendChild(loAdd);
const goTop = document.createElement('a');
goTop.classList.add('goTop');
goTop.href = '#top';
goTop.textContent = ' ^ Go to top';
loText.appendChild(goTop);

const loMap = document.createElement('iframe');
loMap.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d886188.2397363144!2d-95.96171784552766!3d29.815995521526638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1667270394329!5m2!1sen!2sus';
loMap.width = '400px';
loMap.height = '260px';
loCont.appendChild(loMap);


  //* footer creation *//
  const footer = document.createElement('footer');
  const giticon = new Image();
  giticon.src = gitimg;
  giticon.classList.add('filter-bw');
  document.body.appendChild(footer);
  footer.appendChild(giticon);
  const footerText = document.createElement('a');
  footerText.href = 'https://github.com/lisa-go';
  footerText.textContent = 'Website by Lisa';
  footer.appendChild(footerText);


mainPage();

