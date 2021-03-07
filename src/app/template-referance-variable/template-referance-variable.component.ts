import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-referance-variable',
  template: `
    <h2>Welcome {{ name }}</h2>
    <input type="text" #myInput value="{{ name }}">
    <button (click)="logMessage(myInput.value)">Log</button>
  `,
  styleUrls: ['./template-referance-variable.component.css']
})
export class TemplateReferanceVariableComponent implements OnInit {
  public name = 'Angular';

  constructor() { }

  ngOnInit(): void {
  }

  logMessage(val:any) {
    console.log(val);
  }

}
