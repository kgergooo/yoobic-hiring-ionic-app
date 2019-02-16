import moment from 'moment';
import { getDayListByMonth, isSameDate, getDayFromDate, getMonthNameFromDate, getPreviousMonth, getNextMonth, getShortDate, getTime } from '../../utils/utils';
export class DateTimePicker {
    constructor() {
        this.selectedDate = new Date();
        this.selectedTime = "12:00";
    }
    watchHandler(newDate) {
        this.reloadCalendar(newDate);
    }
    reloadCalendar(newDate) {
        this.selectedMonth = moment(newDate).startOf('month').toDate();
        this.daysInMonth = getDayListByMonth(this.selectedMonth);
    }
    onNextMonthClicked() {
        this.selectedMonth = getNextMonth(this.selectedMonth);
        this.daysInMonth = getDayListByMonth(this.selectedMonth);
    }
    onPreviousMonthClicked() {
        this.selectedMonth = getPreviousMonth(this.selectedMonth);
        this.daysInMonth = getDayListByMonth(this.selectedMonth);
    }
    onDaySelected(day) {
        if (day) {
            this.selectedDate = moment(new Date(day)).toDate();
            this.onDateSelected.emit(day);
        }
    }
    onTimeChanged(ev) {
        this.selectedDate = moment(new Date(getShortDate(this.selectedDate)) + " " + ev.target.value).toDate();
        this.onDateSelected.emit(this.selectedDate);
    }
    componentWillLoad() {
        this.watchHandler(this.selectedDate);
    }
    render() {
        return (h("div", { class: "picker-container" },
            h("div", { class: "input-container" },
                h("input", { class: "input-field", value: moment(this.selectedDate).format("YYYY-MM-DD") }),
                h("input", { class: "input-field", type: "time", min: "9:00", max: "18:00", value: getTime(this.selectedDate), onInput: (ev) => { this.onTimeChanged(ev); } })),
            h("div", { class: "month" },
                h("ul", null,
                    h("li", { class: "prev cursor-p", onClick: () => { this.onPreviousMonthClicked(); } }, "\u276E"),
                    h("li", { class: "next cursor-p", onClick: () => { this.onNextMonthClicked(); } }, "\u276F"),
                    h("li", null, getMonthNameFromDate(this.selectedMonth)))),
            h("ul", { class: "weekdays" },
                h("li", null, "Mo"),
                h("li", null, "Tu"),
                h("li", null, "We"),
                h("li", null, "Th"),
                h("li", null, "Fr"),
                h("li", null, "Sa"),
                h("li", null, "Su")),
            h("ul", { class: "days" }, this.daysInMonth.map((day) => h("li", { class: (day ? 'cursor-p' : ''), onClick: () => { this.onDaySelected(day); } },
                h("span", { class: (isSameDate(this.selectedDate, new Date(day)) ? 'active' : '') }, getDayFromDate(day)))))));
    }
    static get is() { return "datetime-picker"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "daysInMonth": {
            "state": true
        },
        "selectedDate": {
            "type": "Any",
            "attr": "selected-date",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["watchHandler"]
        },
        "selectedTime": {
            "state": true
        }
    }; }
    static get events() { return [{
            "name": "onDateSelected",
            "method": "onDateSelected",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:datetime-picker:**/"; }
}
