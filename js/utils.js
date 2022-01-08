const FILTERS = ['Все', 'Звонки', 'Почта', 'Мессенджер', 'Смс'];

const getCommunicationContent = (communication) => {
    switch (communication) {
        case 'Mail':
            return {
                imagePath: './images/mail-icon.png',
                communicationTitle: 'Почта',
            };
            break;
        case 'Sms':
            return {
                imagePath: './images/sms-icon.png',
                communicationTitle: 'Смс'
            };
            break
        case 'Messanger':
            return {
                imagePath: './images/messanger-icon.png',
                communicationTitle: 'Мессенджер'
            };
            break
        default:
            return {
                imagePath: './images/call-icon.png',
                communicationTitle: 'Звонок',
                callType: communication
            };
    }
}

const getFilterAttribute = (filter) => {
    switch (filter) {
        case 'Все':
            return 'All';
            break;
        case 'Звонки':
            return 'Call';
            break;
        case 'Почта':
            return 'Mail';
            break;
        case 'Мессенджер':
            return 'Messanger';
            break;
        case 'Смс':
            return 'Sms';
            break;
    }
}

const getRandomInteger = (firstInteger, lastInteger) => {
    const lower = Math.ceil(Math.min(Math.abs(firstInteger), Math.abs(lastInteger)));
    const upper = Math.floor(Math.max(Math.abs(firstInteger), Math.abs(lastInteger)));

    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
};

export {getCommunicationContent, getFilterAttribute, getRandomInteger, FILTERS};
