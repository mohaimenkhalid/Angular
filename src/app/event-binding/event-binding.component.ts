import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <h2>
      Welcome {{ name }}
    </h2>
    <button (click)="onClick($event)">Greet</button>
    <button (click)="greeting='hello angular'">Greet</button>
    {{ greeting }}
  `,
  styleUrls: ['./event-binding.component.css']
})

export class EventBindingComponent implements OnInit {

  public name: string = 'Angular';
  public greeting = "";
  constructor() { }

  ngOnInit(): void {
  }

  onClick(event:any) {
    this.greeting = "Welcome to angular";
    console.log(event)
  }

}
