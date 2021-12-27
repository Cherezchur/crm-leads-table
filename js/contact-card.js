const contactCardTemplate = document.querySelector('#contact-card').content.querySelector('.contact-card');
const contactCardElement = contactCardTemplate.cloneNode(true);
const downButton = contactCardElement.querySelector('.down-button');

const renderContactCard = ({inn, company, email, id}, tableItemElement) => {

    tableItemElement.appendChild(contactCardTemplate);

    console.log(downButton);

    downButton.addEventListener('click', () => {
        console.log('CLICK!');
        tableItemElement.removeChild(contactCardTemplate);
    })
}

export {renderContactCard};