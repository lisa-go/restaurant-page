import menuIcon from './images/restaurant_menu.svg';
import app1icon from './images/summer_roll-alexander-sinn-unsplash.jpg';
import app2icon from './images/dumpling-kimia-zarifi-unsplash.jpg';
import ent1icon from './images/bbq_noodles_wonton_soup-luke-lung-unsplash.jpg';
import ent2icon from './images/grilled_noodle_bowl-loes-klinker-unsplash.jpg'
import dr1icon from './images/coffee-demi-deherrera-unsplash.jpg';
import dr2icon from './images/milktea-rachel-mcdermott-unsplash.jpg';
import backgroundimage from './images/restaurant-kristian-angelo-unsplash.jpg';


const menuPage = () => {
  document.body.style.background = 'url(' + backgroundimage + ')';
  document.body.style.backgroundSize = '1900px';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundColor = '#040d0c';
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

      //* header creation *//
      const pHeaderM = document.createElement('pHeader');
      pHeaderM.classList.add('pHeader');
      pHeaderM.textContent = 'Menu';
      menu.appendChild(pHeaderM);

      //* icon creation *//
      const myMicon = new Image();
      myMicon.src = menuIcon;
      myMicon.classList.add('myMicon');
      menu.appendChild(myMicon);
    
      //* Menu Section 1 Appetizers *//
      const menuS1 = document.createElement('menuS');
      menu.appendChild(menuS1);

        //* Appetizer header *//
        const mHeader1 = document.createElement('mHeader');
        mHeader1.textContent = 'Appetizers';
        menuS1.appendChild(mHeader1);

          //* Menu item container *//
          const menuItema1 = document.createElement('menuItem');
          menuS1.appendChild(menuItema1);

            //* Appetizer 1 *//
            const app1Text = document.createElement('menuText');
            menuItema1.appendChild(app1Text);

              //* Appetizer 1 Name *//
              const app1Name = document.createElement('menuName');
              app1Name.textContent = 'Vietnamese Summer Rolls';
              app1Text.appendChild(app1Name);

              //* Appetizer 1 Description *//
              const app1Des = document.createElement('menuDes');
              app1Des.textContent = 
              'Vietnamese Rice Paper Rolls wrapped with rice noodles, various herbs, dried onions and your choice of ';
              app1Text.appendChild(app1Des);

              //* Appetizer 1 Choices *//
              const app1Choice = document.createElement('choice');
              app1Choice.textContent = 'shrimp, chicken, or beef';
              app1Text.appendChild(app1Choice)

              //* Appetizer 1 Price *//
              const app1Price = document.createElement('menuPrice');
              app1Price.textContent = '$6.00';
              app1Text.appendChild(app1Price);

            //* Appetizer 1 Picture *//
            const app1pic = new Image();
            app1pic.src = app1icon;
            app1pic.classList.add('menuPic');
            menuItema1.appendChild(app1pic);


          //* Menu item container *//
          const menuItema2 = document.createElement('menuItem');
          menuS1.appendChild(menuItema2);

            //* Appetizer 2 *//
            const app2Text = document.createElement('menuText');
            menuItema2.appendChild(app2Text);

              //* Appetizer 2 Name *//
              const app2Name = document.createElement('menuName');
              app2Name.textContent = 'Dumplings';
              app2Text.appendChild(app2Name);

              //* Appetizer 2 Description *//
              const app2Des = document.createElement('menuDes');
              app2Des.textContent = 
              'Chinese dumplings wrapped with chives, cilantro and your choice of pork with ';
              app2Text.appendChild(app2Des);

              //* Appetizer 2 Choices *//
              const app2Choice = document.createElement('choice');
              app2Choice.textContent = 'shrimp, or beef';
              app2Text.appendChild(app2Choice)

              //* Appetizer 2 Price *//
              const app2Price = document.createElement('menuPrice');
              app2Price.textContent = '$6.00';
              app2Text.appendChild(app2Price);

            //* Appetizer 2 Picture *//
            const app2pic = new Image();
            app2pic.src = app2icon;
            app2pic.classList.add('menuPic');
            menuItema2.appendChild(app2pic);


      //* Menu Section 2 Entrée *//
      const menuS2 = document.createElement('menuS');
      menu.appendChild(menuS2);

        //* Entrée header *//
        const mHeader2 = document.createElement('mHeader');
        mHeader2.textContent = 'Entrée';
        menuS2.appendChild(mHeader2);

          //* Menu item container *//
          const menuIteme1 = document.createElement('menuItem');
          menuS2.appendChild(menuIteme1);

            //* Entrée 1 *//
            const ent1Text = document.createElement('menuText');
            menuIteme1.appendChild(ent1Text);

              //* Entrée 1 Name *//
              const ent1Name = document.createElement('menuName');
              ent1Name.textContent = 'BBQ Noodles';
              ent1Text.appendChild(ent1Name);

              //* Entrée 1 Description *//
              const ent1Des = document.createElement('menuDes');
              ent1Des.textContent = 
              'Soy sauced noodles with Wonton Soup, additional rice and your choice of ';
              ent1Text.appendChild(ent1Des);

              //* Entrée 1 Choices *//
              const ent1Choice = document.createElement('choice');
              ent1Choice.textContent = 'crispy roast pork, roast duck, or bbq pork';
              ent1Text.appendChild(ent1Choice)

              //* Entrée 1 Price *//
              const ent1Price = document.createElement('menuPrice');
              ent1Price.textContent = '$12.00';
              ent1Text.appendChild(ent1Price);

            //* Entrée 1 Picture *//
            const ent1pic = new Image();
            ent1pic.src = ent1icon;
            ent1pic.classList.add('menuPic');
            menuIteme1.appendChild(ent1pic);


          //* Menu item container *//
          const menuIteme2 = document.createElement('menuItem');
          menuS2.appendChild(menuIteme2);

            //* Entrée 2 *//
            const ent2Text = document.createElement('menuText');
            menuIteme2.appendChild(ent2Text);

              //* Entrée 2 Name *//
              const ent2Name = document.createElement('menuName');
              ent2Name.textContent = 'Grilled Noodle Bowl';
              ent2Text.appendChild(ent2Name);

              //* Entrée 2 Description *//
              const ent2Des = document.createElement('menuDes');
              ent2Des.textContent = 
              'Vietnamese noodle bowl with cilantro, bean sprouts, carrots, thai basil, cucumbers topped with our house special fish sauce and your choice of lemongrass-grilled ';
              ent2Text.appendChild(ent2Des);

              //* Entrée 2 Choices *//
              const ent2Choice = document.createElement('choice');
              ent2Choice.textContent = 'chicken, pork, or beef';
              ent2Text.appendChild(ent2Choice)

              //* Entrée 2 Price *//
              const ent2Price = document.createElement('menuPrice');
              ent2Price.textContent = '$12.00';
              ent2Text.appendChild(ent2Price);

            //* Entrée 2 Picture *//
            const ent2pic = new Image();
            ent2pic.src = ent2icon;
            ent2pic.classList.add('menuPic');
            menuIteme2.appendChild(ent2pic);



      //* Menu Section 3 Drinks *//
      const menuS3 = document.createElement('menuS');
      menu.appendChild(menuS3);

        //* Drinks header *//
        const mHeader3 = document.createElement('mHeader');
        mHeader3.textContent = 'Drinks';
        menuS3.appendChild(mHeader3);

          //* Menu item container *//
          const menuItemd1 = document.createElement('menuItem');
          menuS3.appendChild(menuItemd1);

            //* Drink 1 *//
            const dr1Text = document.createElement('menuText');
            menuItemd1.appendChild(dr1Text);

              //* Drink 1 Name *//
              const dr1Name = document.createElement('menuName');
              dr1Name.textContent = 'Vietnamese Coffee';
              dr1Text.appendChild(dr1Name);

              //* Drink 1 Description *//
              const dr1Des = document.createElement('menuDes');
              dr1Des.textContent = 
              'Dripped Vietnamese coffee, served with your choice of ';
              dr1Text.appendChild(dr1Des);

              //* Drink 1 Choices *//
              const dr1Choice = document.createElement('choice');
              dr1Choice.textContent = 'hot or iced';
              dr1Text.appendChild(dr1Choice)

              //* Drink 1 Price *//
              const dr1Price = document.createElement('menuPrice');
              dr1Price.textContent = '$5.00';
              dr1Text.appendChild(dr1Price);

            //* Drink 1 Picture *//
            const dr1pic = new Image();
            dr1pic.src = dr1icon;
            dr1pic.classList.add('menuPic');
            menuItemd1.appendChild(dr1pic);


          //* Menu item container *//
          const menuItemd2 = document.createElement('menuItem');
          menuS3.appendChild(menuItemd2);

            //* Drink 2 *//
            const dr2Text = document.createElement('menuText');
            menuItemd2.appendChild(dr2Text);

              //* Drink 2 Name *//
              const dr2Name = document.createElement('menuName');
              dr2Name.textContent = 'Milk Tea';
              dr2Text.appendChild(dr2Name);

              //* Drink 2 Description *//
              const dr2Des = document.createElement('menuDes');
              dr2Des.textContent = 
              'Milk tea with your choice of toppings ';
              dr2Text.appendChild(dr2Des);

              //* Drink 2 Choices *//
              const dr2Choice = document.createElement('choice');
              dr2Choice.textContent = 'boba, jelly / warm or iced';
              dr2Text.appendChild(dr2Choice)

              //* Drink 2 Price *//
              const dr2Price = document.createElement('menuPrice');
              dr2Price.textContent = '$5.00';
              dr2Text.appendChild(dr2Price);

            //* Drink 2 Picture *//
            const dr2pic = new Image();
            dr2pic.src = dr2icon;
            dr2pic.classList.add('menuPic');
            menuItemd2.appendChild(dr2pic);
    }

export default menuPage;