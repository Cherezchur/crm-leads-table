const renderContactCard = ({name, inn, company, email}, tableItemElement) => {

    const contactCardTemplate = document.querySelector('#contact-card').content.querySelector('.contact-card');
    const contactCardElement = contactCardTemplate.cloneNode(true);
    const downButton = contactCardElement.querySelector('.down-button');
    const saveButton = contactCardElement.querySelector('.save-button');
    const cancellationButton = contactCardElement.querySelector('.cancellation-button');
    const contactCardForm = contactCardElement.querySelector('.conversation');
    const filterButtons = document.querySelectorAll('.filter__radio-button');

    contactCardElement.querySelector('#contact-name').textContent = name;
    contactCardElement.querySelector('#contact-inn').textContent = inn;
    contactCardElement.querySelector('#contact-company').textContent = company;
    contactCardElement.querySelector('#contact-email').textContent = email;
    tableItemElement.appendChild(contactCardElement);

    const removeContactCard = () => {
        filterButtons.forEach((filter) => filter.removeAttribute('disabled', 'disabled'))
        tableItemElement.classList.remove('table-item--open');
        tableItemElement.removeChild(contactCardElement);
    }

    const contactCardButtonClickHandler = (evt) => {
        if(evt.target.className === 'cancellation-button') {
            contactCardForm.reset();
        }
        
    }

    contactCardForm.addEventListener('change', () => {
        filterButtons.forEach((filter) => filter.setAttribute('disabled', 'disabled'))

        downButton.setAttribute('style', 'display:none;');
        saveButton.setAttribute('style', 'display:block;');
        cancellationButton.setAttribute('style', 'display:block;');
    })

    downButton.addEventListener('click', removeContactCard);
    saveButton.addEventListener('click', contactCardButtonClickHandler);
    cancellationButton.addEventListener('click', contactCardButtonClickHandler);
}

export {renderContactCard};