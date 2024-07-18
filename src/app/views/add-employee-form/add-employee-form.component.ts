import { Component } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

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

  ngOnInit(): void {}

  onSave(): void {
    console.log(this.employeeForm.value);
  }

  onCancel(): void {
    this.employeeForm.reset();
  }
}
