import reservebg from './images/reserved-alfred-quartey-unsplash.jpg'
import resIcon from './images/table_restaurant.svg';

const reservePage = () => {
  document.body.style.background = 'url(' + reservebg + ')';
  document.body.style.backgroundSize = '1900px';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundPosition = 'bottom';
  document.body.style.backgroundAttachment = 'fixed';
  document.body.style.backgroundColor = '#040d0c';
    content.removeChild(content.children[1]);

    const reserve = document.createElement('div');
    reserve.classList.add('reserve');
    content.appendChild(reserve);
    reserve.style.display = 'flex';

    const reCont = document.createElement('div')
    reCont.classList.add('reserveContainer');
    reserve.appendChild(reCont);

    //* Top part of div *//
    const rTop = document.createElement('div')
    rTop.classList.add('rTop');
    reCont.appendChild(rTop);

      //* logo creation *//
      const logo = document.createElement('div');
      logo.classList.add('logo');
      logo.textContent = 'Hometown Cravings';
      rTop.appendChild(logo);

      //* header creation *//
      const pHeaderR = document.createElement('pHeader');
      pHeaderR.classList.add('pHeader');
      pHeaderR.textContent = 'Reservations';
      rTop.appendChild(pHeaderR);

      //* icon creation *//
      const myRicon = new Image();
      myRicon.src = resIcon;
      myRicon.classList.add('filter-bw');
      myRicon.classList.add('myRicon');
      rTop.appendChild(myRicon);
    
  //* reservation form creation *//
    }

export default reservePage;