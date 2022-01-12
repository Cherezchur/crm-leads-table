import { getCommunicationContent } from "./utils.js";
import { renderContactCard} from "./contact-card.js";

const tableBody = document.querySelector('.history-body__body');
const tableItemTemplate = document.querySelector('#table-item').content.querySelector('.table-item');
const tableItemFragment = document.createDocumentFragment();

const getTableItems = (data) => {

    console.log(data);
    if(data.length === 0) {
        tableBody.textContent = 'Здесь пока ни одного контакта...';
        return;
    }

    let isItemActive = false;
    tableBody.textContent = '';

    data.forEach(({communication, date, name, phoneNumber, time, inn, company, email}, id) => {
        const tableItemElement = tableItemTemplate.cloneNode(true);
        const communicationImage = tableItemElement.querySelector('.table-item__image');
        const communicationElement = tableItemElement.querySelector('.table-item__communication');

        tableItemElement.setAttribute('data-id', id)
        communicationImage.setAttribute('src', getCommunicationContent(communication).imagePath);
        communicationImage.setAttribute('alt', getCommunicationContent(communication).communicationTitle);
        tableItemElement.querySelector('.table-item__time').textContent = time;
        tableItemElement.querySelector('.table-item__date').textContent = date;
        tableItemElement.querySelector('.table-item__name').textContent = name;
        tableItemElement.querySelector('.table-item__tel').textContent = phoneNumber;
        communicationElement.textContent = getCommunicationContent(communication).communicationTitle;

        if(getCommunicationContent(communication).callType) {
            const callIconElement = document.createElement('span');
            callIconElement.classList.add('call-icon');

            if(communication === 'niceIncomingCall' || communication === 'missedIncomingCall') {
                callIconElement.textContent = 'Входящий';
                callIconElement.classList.add('call-icon--outgoing');
            } else {
                callIconElement.textContent = 'Исходящий';
                callIconElement.classList.add('call-icon--incoming');
            }
            
            communicationElement.appendChild(callIconElement);
        }

        const tableItemClickHandler = (evt) => {

            if(evt.target.tagName === 'BUTTON') {
                isItemActive = false;
                return;
            }
        
            if(isItemActive === false) {
                isItemActive = true;
                tableItemElement.classList.add('table-item--open');
                renderContactCard({name, inn, company, email}, tableItemElement);
            }
        }

        tableItemElement.addEventListener('click', tableItemClickHandler);

        tableItemFragment.appendChild(tableItemElement);
    });

    tableBody.appendChild(tableItemFragment);
    const lastItemElement = tableBody.querySelector(`.table-item[data-id="${data.length - 1}"]`);
    lastItemElement.setAttribute('id', 'to-down');
}

export {getTableItems};
