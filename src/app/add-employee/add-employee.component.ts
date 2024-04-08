import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.pattern('[0-9]{10}')],
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      console.log('Form submitted successfully:', this.employeeForm.value);
      // Add your logic here to handle form submission, such as calling an API or performing other actions
    } else {
      console.error('Invalid form, please check all fields.');
    }
  }
}
