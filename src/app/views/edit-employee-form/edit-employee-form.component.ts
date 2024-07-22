import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-edit-employee-form',
  templateUrl: './edit-employee-form.component.html',
  styleUrl: './edit-employee-form.component.css',
})
export class EditEmployeeFormComponent implements OnChanges {
  @Input() employee: Employee | null = null;
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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['employee'] && this.employee) {
      this.employeeForm.patchValue({
        name: this.employee?.name,
        joinDate: this.employee?.birthDate, // Adjust as needed
        updateDate: new Date(), // Adjust as needed
        experience: this.employee?.age, // Adjust as needed
        supervisor: this.employee?.supervisor,
        office: this.employee?.office,
        workType: this.employee?.workType,
        workState: this.employee?.city, // Adjust as needed
        position: this.employee?.company, // Adjust as needed
        residenceCity: this.employee?.city,
      });
    }
  }

  onSave(): void {
    console.log(this.employeeForm.value);
  }

  onCancel(): void {
    this.employeeForm.reset();
  }
}
