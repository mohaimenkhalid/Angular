import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department List
    </p>
    <ul *ngFor="let department of departments">
      <li>{{ department.name }}</li>
    </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {

  public departments = [
    {"id": 1, "name": "CSE"},
    {"id": 2, "name": "ETE"},
    {"id": 3, "name": "EEE"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
