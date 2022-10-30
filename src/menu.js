

const menuPage = () => {
    content.removeChild(content.children[1]);
    const menu = document.createElement('div');
    menu.classList.add('menu');
    content.appendChild(menu);
    menu.style.display = 'flex';
    
      //* logo creation *//
      const logo = document.createElement('div');
      logo.classList.add('logo');
      logo.textContent = 'Hometown Cravings';
      menu.appendChild(logo);
    
    }

export default menuPage;