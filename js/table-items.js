const tableBody = document.querySelector('.history__table-body');
const tableItemTemplate = document.querySelector('#table-item').content.querySelector('.history__table-row-contact');

'mail', 'sms', 'niceIncomingCall', 'niceOutgoingCall', 'missedIncomingCall', 'missedOutgoingCall', 'messanger'

const getCommunicationImage = (communication) => {
    switch (communication) {
        case 'mail':
            return './images/mail-icon.png';
            break;
        case 'sms':
            return './images/sms-icon.png';
            break
        case 'messanger':
            return './images/messanger-icon.png';
            break
        default:
            return './images/call-icon.png'
    }
}

console.log(tableItemTemplate);

const getTableContainer = (data) => {
    data.forEach(({communication, date, name, phoneNumber, time}, id) => {
        const tableItemElement = tableItemTemplate.cloneNode(true);
        const communicationImage = tableItemElement.querySelector('.history__table-image');
        communicationImage.setAttribute('src', getCommunicationImage(communication));
        communicationImage.setAttribute('alt', communication);
        tableItemElement.querySelector('.history__table-time').textContent = time;
        tableItemElement.querySelector('.history__table-date').textContent = date;

    });
}

export {getTableContainer};
