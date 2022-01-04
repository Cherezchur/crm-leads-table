const renderContactCard = ({name, inn, company, email}, tableItemElement) => {

    console.log(company);
    const contactCardTemplate = document.querySelector('#contact-card').content.querySelector('.contact-card');
    const contactCardElement = contactCardTemplate.cloneNode(true);
    const downButton = contactCardElement.querySelector('.down-button');
    contactCardElement.querySelector('#contact-name').textContent = name;
    contactCardElement.querySelector('#contact-inn').textContent = inn;
    contactCardElement.querySelector('#contact-company').textContent = company;
    contactCardElement.querySelector('#contact-email').textContent = email;
    tableItemElement.appendChild(contactCardElement);

    downButton.addEventListener('click', () => {
        tableItemElement.classList.remove('table-item--open');
        console.log('button click')
        tableItemElement.removeChild(contactCardElement);
    })
}

export {renderContactCard};