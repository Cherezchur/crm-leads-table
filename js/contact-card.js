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
    const warningPopupButtons = warningPopup.querySelector('.warning-popup__buttons-wrapper');

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

    const contactCardButtonsReset = () => {
        downButton.removeAttribute('style', 'display:none;');
        saveButton.removeAttribute('style', 'display:block;');
        cancellationButton.removeAttribute('style', 'display:block;');
    }

    const showWarningPopup = () => {
        warningPopup.setAttribute('style', 'display:block;');
        warningPopupButtons.addEventListener('click', (evt) => {
            warningPopup.removeAttribute('style', 'display:block;');
            if(evt.target.className === 'warning-popup__consent') {
                contactCardForm.reset();
            }
        })
    }

    const contactCardButtonClickHandler = (evt) => {
        if(evt.target.className === 'cancellation-button') {
            showWarningPopup();
            warningPopupText.textContent = 'Удалить введенные данные?';
        } else {
            contactCardButtonsReset();
        }
    }

    contactCardForm.addEventListener('input', () => {
        filterButtons.forEach((filter) => filter.setAttribute('disabled', 'disabled'))

        downButton.setAttribute('style', 'display:none;');
        saveButton.setAttribute('style', 'display:block;');
        cancellationButton.setAttribute('style', 'display:block;');
    })

    contactCardForm.addEventListener('reset', contactCardButtonsReset);

    downButton.addEventListener('click', removeContactCard);
    saveButton.addEventListener('click', contactCardButtonClickHandler);
    cancellationButton.addEventListener('click', contactCardButtonClickHandler);
}

export {renderContactCard};