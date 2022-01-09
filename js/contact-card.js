const renderContactCard = ({name, inn, company, email}, tableItemElement) => {

    const contactCardTemplate = document.querySelector('#contact-card').content.querySelector('.contact-card');
    const contactCardElement = contactCardTemplate.cloneNode(true);
    const downButton = contactCardElement.querySelector('.down-button');
    const saveButton = contactCardElement.querySelector('.save-button');
    const cancellationButton = contactCardElement.querySelector('.cancellation-button');
    const contactCardForm = contactCardElement.querySelector('.conversation');

    contactCardElement.querySelector('#contact-name').textContent = name;
    contactCardElement.querySelector('#contact-inn').textContent = inn;
    contactCardElement.querySelector('#contact-company').textContent = company;
    contactCardElement.querySelector('#contact-email').textContent = email;
    tableItemElement.appendChild(contactCardElement);

    const contactCardButtonClickHandler = (evt) => {
        if(evt.target.className === 'cancellation-button') {
            contactCardForm.reset();
        }
        tableItemElement.classList.remove('table-item--open');
        tableItemElement.removeChild(contactCardElement);
    }

    contactCardForm.addEventListener('change', () => {
        downButton.setAttribute('style', 'display:none;');
        saveButton.setAttribute('style', 'display:block;');
        cancellationButton.setAttribute('style', 'display:block;');
    })

    downButton.addEventListener('click', contactCardButtonClickHandler);
    saveButton.addEventListener('click', contactCardButtonClickHandler);
    cancellationButton.addEventListener('click', contactCardButtonClickHandler);
}

export {renderContactCard};