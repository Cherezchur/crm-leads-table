const contactCardTemplate = document.querySelector('#contact-card').content.querySelector('.contact-card');
const contactCardElement = contactCardTemplate.cloneNode(true);

const renderContactCard = ({inn, company, email, id}, tableItemElement) => {
    // const tableItem = document.querySelector(`.table-item[data-id="${id}"]`);

    tableItemElement.appendChild(contactCardTemplate);
}

export {renderContactCard, contactCardElement};