import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-employee-list',
  template: `
        <h1>Employee Details</h1>
        <div>
          <ul *ngFor="let employee of employees">
            <li>Name: {{ employee.name }}, Age: {{ employee.age}}</li>
          </ul>
        </div>
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees:any = [];
  constructor(private _employeeService: EmployeeService) {

  }

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
  }

}
