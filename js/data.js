import { getRandomInteger } from "./utils.js";

const LEADS_COUNT = 25;

const getTimes = () => {
    const minute = getRandomInteger(1,59);
    const hour = getRandomInteger(1,23);
    const time = `${hour}:${minute < 10 ? '0' + minute : minute}`;
    return time;
}

const getDate = () => {
    const day = getRandomInteger(1,31);
    const date = `${day} май 2021`;
    return date;
}

const COMMUNICATION = ['Mail', 'Sms', 'niceIncomingCall', 'niceOutgoingCall', 'missedIncomingCall', 'missedOutgoingCall', 'Messanger'];

const NAMES = ['Шутов Николай Валерьевич', 'Тимощук Людмила Львовна', 'Гигенидзе Аврам Абдулович', 'Иванов Дмитрий Анатольевич'];

const PHONE_NUMBERS = ['+7(980)332-40-98', '+7(999)777-88-88', '+7(223)111-22-45'];

const COMPANY = ['Avon', 'Resolute', 'Минотавр', 'Кисловодск-электро'];

const EMAIL = ['avon@mail.ru', 'resolute@mail.ru', 'minotavr@mail.ru', 'kislovodsk@mail.ru'];

const createData = () => ({
    time: getTimes(),
    date: getDate(),
    communication: COMMUNICATION[getRandomInteger(0, COMMUNICATION.length - 1)],
    name: NAMES[getRandomInteger(0, NAMES.length - 1)],
    phoneNumber: PHONE_NUMBERS[getRandomInteger(0, PHONE_NUMBERS.length - 1)],
    inn: getRandomInteger(80000000000, 89999999999),
    company: COMPANY[getRandomInteger(0, COMPANY.length - 1)],
    email: EMAIL[getRandomInteger(0, EMAIL.length - 1)],
    topic: '',
    task: '',
    note: ''
})

const leadsInformation = new Array(LEADS_COUNT).fill(null).map(() => createData());

console.log(leadsInformation);

export {leadsInformation};