import backgroundimage from './images/restaurant-kristian-angelo-unsplash.jpg';

const locationPage = () => {
  document.body.style.background = 'url(' + backgroundimage + ')';
  document.body.style.backgroundSize = '1900px';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundColor = '#040d0c';
    content.removeChild(content.children[1]);
    
    const location = document.createElement('div');
    location.classList.add('location');
    content.appendChild(location);
    location.style.display = 'flex';
    
      //* logo creation *//
      const logo = document.createElement('div');
      logo.classList.add('logo');
      logo.textContent = 'Hometown Cravings';
      location.appendChild(logo);
    
    }

export default locationPage;