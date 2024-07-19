import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css'],
})
export class EmployeeDataComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  displayAddEmployeeDialog: boolean = false;
  selectedEmployee: Employee | null = null;

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    const initialEmployees: Employee[] = [
      {
        name: 'Lasha Kochoradze',
        email: 'lashakochoradze@gmail.com',
        phone: '595221025',
        birthDate: '01/04/1985',
        age: 35,
        company: 'Nugios',
        city: 'Turkey',
        workType: 'Remote',
        gender: 'male',
        marriageStatus: 'married',
        supervisor: 'Sophie',
        office: 'Tbilisi',
      },
      {
        name: 'Diana Okujava',
        email: 'dianaokujava@gmail.com',
        phone: '595221025',
        birthDate: '03/07/1994',
        age: 25,
        company: 'Kazunion',
        city: 'Tbilisi',
        workType: 'Remote',
        gender: 'female',
        marriageStatus: 'married',
        supervisor: 'Sophie',
        office: 'Tbilisi',
      },
    ];

    for (let i = 0; i < 10; i++) {
      this.employees = this.employees.concat(initialEmployees);
    }

    this.filteredEmployees = this.employees;

    this.filterService.filter$.subscribe((filter) => {
      this.applyFilter(filter);
    });
  }

  applyFilter(filter: string): void {
    this.filteredEmployees = this.employees.filter((employee) =>
      Object.values(employee).some((value: any) =>
        value.toString().toLowerCase().includes(filter.toLowerCase())
      )
    );
  }

  onAdd(): void {
    this.selectedEmployee = null;
    this.displayAddEmployeeDialog = true;
  }

  onDialogHide(): void {
    this.displayAddEmployeeDialog = false;
  }

  onEdit(): void {
    if (this.selectedEmployee) {
      this.displayAddEmployeeDialog = true;
    } else {
      console.log('No employee selected');
    }
  }

  onDelete(): void {
    if (this.selectedEmployee) {
      // Function to handle deleting an employee
      console.log('Delete button clicked for', this.selectedEmployee);
    } else {
      console.log('No employee selected');
    }
  }

  onAccessRights(): void {
    // Function to handle access rights
  }

  onRowSelect(event: any): void {
    this.selectedEmployee = event.data;
  }

  onRowDblClick(event: any): void {
    this.selectedEmployee = event.data;
    this.displayAddEmployeeDialog = true;
  }
}
