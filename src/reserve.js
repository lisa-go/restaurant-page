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
  const formCont = document.createElement('formCont');
  reCont.appendChild(formCont);

    //* field 1 - name *//
    const field1 = document.createElement('formfield');
    formCont.appendChild(field1);

    const label1 = document.createElement('label');
    label1.htmlFor = 'name';
    label1.textContent = '*Name: ';
    field1.appendChild(label1);

    const input1 = document.createElement('input');
    input1.type = 'text';
    input1.id = 'name';
    input1.required = 'true';
    field1.appendChild(input1);


    //* field 2 - date time *//
    const field2 = document.createElement('formfield');
    formCont.appendChild(field2);

    const label2 = document.createElement('label');
    label2.htmlFor = 'datetime';
    label2.textContent = '*Date & Time: ';
    field2.appendChild(label2);

    const input2 = document.createElement('input');
    input2.type = 'datetime-local';
    input2.id = 'datetime';
    input2.required = 'true';
    field2.appendChild(input2);


    //* field 3 - group size *//
    const field3 = document.createElement('formfield');
    formCont.appendChild(field3);

    const label3 = document.createElement('label');
    label3.htmlFor = 'groupsize';
    label3.textContent = '*Group Size: ';
    field3.appendChild(label3);

    const input3 = document.createElement('input');
    input3.type = 'number';
    input3.id = 'groupsize';
    input3.required = 'true';
    field3.appendChild(input3);


    //* field 4 - phone number *//
    const field4 = document.createElement('formfield');
    formCont.appendChild(field4);

    const label4 = document.createElement('label');
    label4.htmlFor = 'phone';
    label4.textContent = '*Contact Number: ';
    field4.appendChild(label4);

    const input4 = document.createElement('input');
    input4.type = 'tel';
    input4.id = 'phone';
    input4.required = 'true';
    field4.appendChild(input4);

    
    //* submit button *//
    const formBtn = document.createElement('button');
    formBtn.classList.add('formBtn');
    formBtn.type = 'submit';
    formBtn.textContent = 'Reserve';
    formCont.appendChild(formBtn);
}

export default reservePage;