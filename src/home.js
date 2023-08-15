export const HomeContent = (() => {
    const body = document.body;

    const container = document.createElement('div');
    container.classList.add('contentContainer');
    const welcomeHeading = document.createElement('h1');
    welcomeHeading.innerHTML = 'Welcome to "the Tavern"!';

    body.appendChild(container);
    container.appendChild(welcomeHeading);

    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('descriptionContainer');

    container.appendChild(descriptionContainer);

    const paraOne = document.createElement('p');
    paraOne.classList.add('descriptionPara');
    paraOne.innerHTML = 'Where hearty laughter, flavorful libations, and unforgettable memories converge in a symphony of camaraderie. Nestled in the heart of [City Name], our cozy and inviting establishment beckons you to step inside and experience the warmth of a true local gathering place.';
    descriptionContainer.appendChild(paraOne);

    const divOne = document.createElement('div');
    divOne.classList.add('descriptionDiv');
    descriptionContainer.appendChild(divOne);

    const divTwo = document.createElement('div');
    divTwo.classList.add('descriptionDiv');
    descriptionContainer.appendChild(divTwo);

    const paraTwo = document.createElement('p');
    paraTwo.classList.add('descriptionPara');
    paraTwo.innerHTML = 'As you cross the threshold into "The Tavern," you\'ll be embraced by the rustic charm that defines our character. The scent of crackling firewood and delectable dishes wafts through the air, setting the stage for an evening of delight. Our carefully curated décor, a seamless blend of timeless tradition and modern comfort, invites patrons to settle in and relish in the company of friends both old and new.';
    descriptionContainer.appendChild(paraTwo);

    const paraThree = document.createElement('p');
    paraThree.classList.add('descriptionPara');
    paraThree.innerHTML = 'Our extensive menu boasts a delectable array of culinary delights, crafted with passion and finesse by our talented chefs. From savory starters that tease your taste buds to mouthwatering main courses that celebrate local flavors, each dish is a masterpiece in its own right. Pair your meal with a selection from our thoughtfully curated wine and spirits collection, showcasing both international classics and local favorites. Our experienced mixologists are always ready to create bespoke cocktails that perfectly complement your preferences.';
    descriptionContainer.appendChild(paraThree);

    const divThree = document.createElement('div');
    divThree.classList.add('descriptionDiv');
    descriptionContainer.appendChild(divThree);

    const divFour = document.createElement('div');
    divFour.classList.add('descriptionDiv');
    descriptionContainer.appendChild(divFour);

    const paraFour = document.createElement('p');
    paraFour.classList.add('descriptionPara');
    paraFour.innerHTML = '"The Tavern" is more than just a place to dine and drink; it\'s a haven for shared stories, animated conversations, and heartwarming laughter. Whether you\'re seeking an intimate dinner for two, a lively evening with friends, or a welcoming spot to unwind after a long day, you\'ll find solace within our walls.';
    descriptionContainer.appendChild(paraFour);

    const paraFive = document.createElement('p');
    paraFive.classList.add('descriptionPara');
    paraFive.innerHTML = 'Join us at "The Tavern," where every visit is an invitation to savor life\'s simple pleasures. Cheers to good company, great food, and cherished moments – we can\'t wait to raise a glass with you.';
    descriptionContainer.appendChild(paraFive);

    const divFive = document.createElement('div');
    divFive.classList.add('descriptionDiv');
    descriptionContainer.appendChild(divFive);
});