const renderContactCard = ({name, inn, company, email}, tableItemElement) => {

    const contactCardTemplate = document.querySelector('#contact-card').content.querySelector('.contact-card');
    const contactCardElement = contactCardTemplate.cloneNode(true);
    const downButton = contactCardElement.querySelector('.down-button');
    const saveButton = contactCardElement.querySelector('.save-button');
    const cancellationButton = contactCardElement.querySelector('.cancellation-button');
    const contactCardForm = contactCardElement.querySelector('.conversation');
    const filterButtons = document.querySelectorAll('.filter__radio-button');
    const warningPopup = document.querySelector('#warning-popup');
    const warningPopupText = warningPopup.querySelector('.warning-popup__text');
    const consentButton = warningPopup.querySelector('.warning-popup__consent');
    const negativeButton = warningPopup.querySelector('.warning-popup__negative');

    contactCardElement.querySelector('#contact-name').textContent = name;
    contactCardElement.querySelector('#contact-inn').textContent = inn;
    contactCardElement.querySelector('#contact-company').textContent = company;
    contactCardElement.querySelector('#contact-email').textContent = email;
    tableItemElement.appendChild(contactCardElement);

    const removeContactCard = () => {
        filterButtons.forEach((filter) => filter.removeAttribute('disabled', 'disabled'))
        tableItemElement.removeChild(contactCardElement);
        tableItemElement.classList.remove('table-item--open');
    }

    const contactCardButtonsReser = () => {
        downButton.removeAttribute('style', 'display:none;');
        saveButton.removeAttribute('style', 'display:block;');
        cancellationButton.removeAttribute('style', 'display:block;');
    }

    const negativeButtonClickHandler = () => {
        warningPopup.removeAttribute('style', 'display:block;');
    }

    const consertButtonClickHandler = () => {
        negativeButtonClickHandler();
        contactCardForm.reset();
    }

    const showWarningPopup = () => {
        warningPopup.setAttribute('style', 'display:block;');
        negativeButton.addEventListener('click', negativeButtonClickHandler);
        consentButton.addEventListener('click', consertButtonClickHandler);
    }

    const contactCardButtonClickHandler = (evt) => {
        if(evt.target.className === 'cancellation-button') {
            showWarningPopup();
            warningPopupText.textContent = 'Удалить введенные данные?';
        } else {
            contactCardButtonsReser();
        }
    }

    contactCardForm.addEventListener('change', () => {
        filterButtons.forEach((filter) => filter.setAttribute('disabled', 'disabled'))

        downButton.setAttribute('style', 'display:none;');
        saveButton.setAttribute('style', 'display:block;');
        cancellationButton.setAttribute('style', 'display:block;');
    })

    contactCardForm.addEventListener('reset', () => contactCardButtonsReser);

    downButton.addEventListener('click', removeContactCard);
    saveButton.addEventListener('click', contactCardButtonClickHandler);
    cancellationButton.addEventListener('click', contactCardButtonClickHandler);
}

export {renderContactCard};