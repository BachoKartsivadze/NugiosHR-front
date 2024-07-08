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
      {
        name: 'Bacho Kartsivadze',
        email: 'bachoqarcivadze@gmail.com',
        phone: '595221025',
        birthDate: '02/08/2002',
        age: 21,
        company: 'Nugios',
        city: 'Tbilisi',
        workType: 'Office',
        gender: 'male',
        marriageStatus: 'unmarried',
        supervisor: 'Sophie',
        office: 'Tbilisi',
      },
      {
        name: 'Amiran Gurgenidze',
        email: 'amirangurgenidze@gmail.com',
        phone: '595221025',
        birthDate: '03/02/1986',
        age: 34,
        company: 'Rustar',
        city: 'Tbilisi',
        workType: 'Office',
        gender: 'male',
        marriageStatus: 'unmarried',
        supervisor: 'Sophie',
        office: 'Dubai',
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
}
