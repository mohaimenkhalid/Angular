import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
      {id: 1, name: 'siddik', 'age': 35},
      {id: 2, name: 'Tarif', 'age': 30},
      {id: 3, name: 'Tarekh', 'age': 25},
      {id: 3, name: 'Sharif', 'age': 27},
      {id: 4, name: 'Mohaimen', 'age': 30},
    ];
  }
}
