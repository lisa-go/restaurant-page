const reservePage = () => {
    content.removeChild(content.children[1]);
    const reserve = document.createElement('div');
    reserve.classList.add('reserve');
    content.appendChild(reserve);
    reserve.style.display = 'flex';
    
      //* logo creation *//
      const logo = document.createElement('div');
      logo.classList.add('logo');
      logo.textContent = 'Hometown Cravings';
      reserve.appendChild(logo);
    
    }

export default reservePage;