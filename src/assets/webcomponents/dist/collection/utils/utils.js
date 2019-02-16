import moment from 'moment';
export function getDayListByMonth(date) {
    const response = [];
    const startOfMonth = moment(date).startOf('month').format('YYYY-MM-DD');
    const endOfMonth = moment(date).endOf('month').format('YYYY-MM-DD');
    const dayOfWeek = moment(date).startOf('month').day();
    for (let i = 1; i < dayOfWeek; i++) {
        response.push(null);
    }
    const dayCounter = moment(new Date(startOfMonth));
    for (let i = 1; i <= +getDayFromDate(endOfMonth); i++) {
        response.push(dayCounter.toString());
        dayCounter.add(1, "day");
    }
    return response;
}
export function getTime(date) {
    return moment(date).format('HH:mm');
}
export function getNextMonth(date) {
    return moment(date).add(1, "month").startOf('month').toDate();
}
export function getPreviousMonth(date) {
    return moment(date).subtract(1, "month").startOf('month').toDate();
}
export function getNextMonthName(date) {
    return moment(getNextMonth(date)).format('MMM');
}
export function getPreviousMonthName(date) {
    return moment(getPreviousMonth(date)).format('MMM');
}
export function getDayFromDate(date) {
    return date ? moment(new Date(date)).format('DD') : "";
}
export function isSameDate(first, second) {
    const response = moment(first).date() === moment(second).date() &&
        moment(first).month() === moment(second).month() &&
        moment(first).year() === moment(second).year();
    return response;
}
export function getMonthNameFromDate(date) {
    return moment(date).format('MMMM YYYY');
}
export function getShortDate(date) {
    return moment(date).format('YYYY-MM-D');
}
