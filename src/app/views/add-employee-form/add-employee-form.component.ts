import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-add-employee-form',
  templateUrl: './add-employee-form.component.html',
  styleUrl: './add-employee-form.component.css',
})
export class AddEmployeeFormComponent {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      name: [''],
      joinDate: [''],
      updateDate: [''],
      experience: [''],
      supervisor: [''],
      office: [''],
      workType: [''],
      workState: [''],
      position: [''],
      residenceCity: [''],
    });
  }

  onSave(): void {
    console.log(this.employeeForm.value);
  }

  onCancel(): void {
    this.employeeForm.reset();
  }
}
