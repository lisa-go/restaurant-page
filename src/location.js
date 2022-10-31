const locationPage = () => {
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