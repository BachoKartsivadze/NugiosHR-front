import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { Person } from '../../models/persons.model';
@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrl: './personal-data.component.css',
})
export class PersonalDataComponent {
  persons: Person[] = [];
  filteredPersons: Person[] = [];
  displayAddEmployeeDialog: boolean = false;
  displayEditEmployeeDialog: boolean = false;
  selectedPerson: Person | null = null;

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    const initialEmployees: Person[] = [
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
      this.persons = this.persons.concat(initialEmployees);
    }

    this.filteredPersons = this.persons;

    this.filterService.filter$.subscribe((filter) => {
      this.applyFilter(filter);
    });
  }

  applyFilter(filter: string): void {
    this.filteredPersons = this.persons.filter((person) =>
      Object.values(person).some((value: any) =>
        value.toString().toLowerCase().includes(filter.toLowerCase())
      )
    );
  }

  onAdd(): void {
    this.selectedPerson = null;
    this.displayAddEmployeeDialog = true;
  }

  onAddDialogHide(): void {
    this.displayAddEmployeeDialog = false;
  }

  onEditDialogHide(): void {
    this.displayEditEmployeeDialog = false;
  }

  onEdit(): void {
    if (this.selectedPerson) {
      this.displayEditEmployeeDialog = true;
    } else {
      console.log('No employee selected');
    }
  }

  onDelete(): void {
    if (this.selectedPerson) {
      // Function to handle deleting an employee
      console.log('Delete button clicked for', this.selectedPerson);
    } else {
      console.log('No employee selected');
    }
  }

  onAccessRights(): void {
    // Function to handle access rights
  }

  onRowSelect(event: any): void {
    this.selectedPerson = event.data;
  }

  onRowDblClick(event: any): void {
    this.selectedPerson = event.data;
    this.displayEditEmployeeDialog = true;
  }
}
