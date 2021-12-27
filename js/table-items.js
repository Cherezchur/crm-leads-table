import { getCommunicationContent } from "./utils.js";
import { renderContactCard} from "./contact-card.js";

const tableBody = document.querySelector('.history-body__body');
const tableItemTemplate = document.querySelector('#table-item').content.querySelector('.table-item');
const tableItemFragment = document.createDocumentFragment();
let prevTableItem;

const getTableContainer = (data) => {
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
                callIconElement.classList.add('call-icon--incoming');
            } else {
                callIconElement.textContent = 'Исходящий';
                callIconElement.classList.add('call-icon--outgoing');
            }
            
            communicationElement.appendChild(callIconElement);
        }

        tableItemElement.addEventListener('click', () => {

            if(tableItemElement.className === 'table-item table-item--open') {
                return;
            }

            if(prevTableItem) {
                prevTableItem.classList.remove('table-item--open');
            }

            tableItemElement.classList.add('table-item--open');
            prevTableItem = tableItemElement;
            
            renderContactCard({inn, company, email, id}, tableItemElement);
        })

        tableItemFragment.appendChild(tableItemElement);
    });

    tableBody.appendChild(tableItemFragment);
}

export {getTableContainer};
