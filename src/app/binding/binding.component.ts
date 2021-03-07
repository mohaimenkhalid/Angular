import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  template: `<div>
    <h2>Name - {{ name}}</h2>
    <h2>{{ 2+2 }}</h2>
    <h2>{{ "welcome " + name }}</h2>
    <h2>{{ "Length " + name.length }}</h2>
    <h2>{{ name.toUpperCase() }}</h2>
    <h2>{{ greetUser() }}</h2>
    <h2>{{ siteUrl }}</h2>
    <hr />
    <h1 style="text-align: center" [class.text-danger]="hasError">Property Binding</h1>
    <input [id]="myId" type="text" placeholder="Enter your name" value="mohaimen">
    <input [id]="myId" type="text" placeholder="Enter your name" value="mohaimen" [disabled] = isDisabled>

    <h2 [ngClass]="messageClasses">Multiple class binding</h2>
  </div>`,
  styles: [`
      .text-success {
        color: green;
      }

      .text-danger {
        color: red;
      }

      .special-class {
        font-weight: 500;
      }
    `]
})
export class BindingComponent implements OnInit {

  public name = 'mohaimen';
  public siteUrl = window.location.href;
  public myId = "testid";
  public isDisabled = true;
  public hasError = false;
  public isSpecial = true;

  public messageClasses = {
    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "special-class" : this.isSpecial,
  }
  constructor() { }

  ngOnInit(): void {
  }

  greetUser() {
    return "Hello from method "+ this.name
  }

}
