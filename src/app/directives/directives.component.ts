import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  template: `
    <h2 *ngIf="displayName; else elseBlockk">Hello Angular - Directive</h2>

    <ng-template #elseBlockk>
      <h2>Name is hidden</h2>
    </ng-template>

    <hr>
    <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

    <ng-template #thenBlock>
      <h2>Show</h2>
    </ng-template>
    <ng-template #elseBlock>
      <h2>Hidden</h2>
    </ng-template>
    <hr>
    <div [ngSwitch]="color">
        <div *ngSwitchCase="'red'">You picked red</div>
        <div *ngSwitchCase="'green'">You picked green</div>
    </div>
  `,
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  public color = 'green';
  public displayName = false;
  constructor() { }

  ngOnInit(): void {
  }

}
