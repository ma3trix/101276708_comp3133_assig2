import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from './employee'; // Adjusted import path

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  // Example method to fetch employee details
  getEmployee(id: number): Observable<Employee | undefined> {
    // Example logic to fetch employee from API or database
    const employees: Employee[] = [
      { id: 1, name: 'John Doe', position: 'Developer' },
      { id: 2, name: 'Jane Smith', position: 'Manager' },
      // Add more employees as needed
    ];
    return of(employees.find(employee => employee.id === id));
  }
}
