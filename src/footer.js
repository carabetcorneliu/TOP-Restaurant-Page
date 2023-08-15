export const Footer = (() => {
    const body = document.body;

    const footerContainer = document.createElement('div');
    footerContainer.classList.add('footer');
    const footerList = document.createElement('ul');
    const footerImgMention = document.createElement('li');
    footerImgMention.innerHTML = '<a href="https://www.freepik.com/free-vector/hand-drawn-food-elements-sketch-design_11861789.htm#query=black%20white%20food&position=44&from_view=search&track=ais">Background Image by Harryarts</a> on Freepik';
    const footerAuthor = document.createElement('li');
    footerAuthor.innerHTML = 'Carabet Corneliu / The Odin Project';

    footerList.appendChild(footerAuthor);
    footerList.appendChild(footerImgMention);
    footerContainer.appendChild(footerList);
    body.appendChild(footerContainer);
});