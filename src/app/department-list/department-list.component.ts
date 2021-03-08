import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department List
    </p>
    <ul *ngFor="let department of departments">
      <li (click)="onSelect(department)" [class.selected]="isSelected(department)">{{ department.name }}</li>
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

    .selected {
      color: green !important;
    }
  `]
})
export class DepartmentListComponent implements OnInit {

  public departments = [
    {"id": 1, "name": "CSE"},
    {"id": 2, "name": "ETE"},
    {"id": 3, "name": "EEE"},
  ];
  public selectedId:any;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt(params.get('id')!)
    });
  }

  onSelect(department:any) {
    this.router.navigate(['/departments', department.id]);
  }

  isSelected(department:any) {
      return department.id === this.selectedId;
  }

}
