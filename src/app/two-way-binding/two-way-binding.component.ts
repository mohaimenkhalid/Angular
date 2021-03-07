import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <input type="text" [(ngModel)]="name" placeholder="Enter your name here">
    <h2>Name: {{ name }}</h2>
  `,
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  public name= '';
  constructor() { }

  ngOnInit(): void {
  }

}
