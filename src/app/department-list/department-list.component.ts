import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department List
    </p>
    <ul *ngFor="let department of departments">
      <li (click)="onSelect(department)">{{ department.name }}</li>
    </ul>
  `,
  styles: [`
    ul li {
      list-style-type: none;
      background: darkkhaki;
      padding: 1rem;
      cursor: pointer;
    }

    ul li:hover {
      background: #6dbd76;
    }
  `]
})
export class DepartmentListComponent implements OnInit {

  public departments = [
    {"id": 1, "name": "CSE"},
    {"id": 2, "name": "ETE"},
    {"id": 3, "name": "EEE"},
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(department:any) {
    this.router.navigate(['/departments', department.id]);
  }

}
