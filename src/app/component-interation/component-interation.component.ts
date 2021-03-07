import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-interation',
  template: `
        <h2>{{ "Hello "+ name }}</h2>
    <button (click)="fireEvent()">Send data to parent component</button>
  `,
  styleUrls: ['./component-interation.component.css']
})
export class ComponentInterationComponent implements OnInit {

  @Input('parentData') public name:any;

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent() {
      this.childEvent.emit('Hay Patent - from child.')
  }

}
