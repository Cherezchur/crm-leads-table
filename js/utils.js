const getCommunicationContent = (communication) => {
    switch (communication) {
        case 'mail':
            return {
                imagePath: './images/mail-icon.png',
                communicationTitle: 'Почта'
            };
            break;
        case 'sms':
            return {
                imagePath: './images/sms-icon.png',
                communicationTitle: 'Смс'
            };
            break
        case 'messanger':
            return {
                imagePath: './images/messanger-icon.png',
                communicationTitle: 'Мессанджер'
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

const getRandomInteger = (firstInteger, lastInteger) => {
    const lower = Math.ceil(Math.min(Math.abs(firstInteger), Math.abs(lastInteger)));
    const upper = Math.floor(Math.max(Math.abs(firstInteger), Math.abs(lastInteger)));

    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
};

export {getCommunicationContent, getRandomInteger};
