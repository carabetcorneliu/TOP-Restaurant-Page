import Icon from './img/logo.jpg';

export const HeaderContent = (() => {
    const body = document.body;

    const header = document.createElement('div');
    header.classList.add('header');

    const logo = document.createElement('img');
    logo.src = Icon;
    
    const nav = document.createElement('ul');
    nav.classList.add('nav');
    const liOne = document.createElement('li');
    liOne.innerHTML = "Home";
    const liTwo = document.createElement('li');
    liTwo.innerHTML = "Menu"
    const liThree = document.createElement('li');
    liThree.innerHTML = "Events";
    const liFour = document.createElement('li');
    liFour.innerHTML = "Galery";
    const liFive = document.createElement('li');
    liFive.innerHTML = "Contact us";

    body.appendChild(header);
    header.appendChild(logo);
    header.appendChild(nav);

    nav.appendChild(liOne);
    nav.appendChild(liTwo);
    nav.appendChild(liThree);
    nav.appendChild(liFour);
    nav.appendChild(liFive);

});

