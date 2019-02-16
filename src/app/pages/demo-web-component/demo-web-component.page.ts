import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-web-component',
  templateUrl: './demo-web-component.page.html'
})
export class DemoWebComponentPage  {
  date: Date = new Date();

  constructor() { }

  onDatePickerChanged(date: Date) {
    this.date = date;
  }
}
