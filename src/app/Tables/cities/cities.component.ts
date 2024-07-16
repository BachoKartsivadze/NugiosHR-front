import { Component } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { City } from '../../models/cities.model';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css',
})
export class CitiesComponent {
  cities: City[] = [
    {
      field_1: 'Info 1',
      field_2: 'Info 2',
      field_3: 'Info 3',
      field_4: 'Info 4',
      field_5: 'Info 5',
    },
    {
      field_1: 'Info 1',
      field_2: 'Info 2',
      field_3: 'Info 3',
      field_4: 'Info 4',
      field_5: 'Info 5',
    },
    {
      field_1: 'Info 1',
      field_2: 'Info 2',
      field_3: 'Info 3',
      field_4: 'Info 4',
      field_5: 'Info 5',
    },
    {
      field_1: 'Info 1',
      field_2: 'Info 2',
      field_3: 'Info 3',
      field_4: 'Info 4',
      field_5: 'Info 5',
    },
    {
      field_1: 'Info 1',
      field_2: 'Info 2',
      field_3: 'Info 3',
      field_4: 'Info 4',
      field_5: 'Info 5',
    },
    {
      field_1: 'Info 1',
      field_2: 'Info 2',
      field_3: 'Info 3',
      field_4: 'Info 4',
      field_5: 'Info 5',
    },
  ];
  filteredCimpanies: any[] = [];

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.filterService.filter$.subscribe((filter) => {
      this.applyFilter(filter);
    });
  }

  applyFilter(filter: string): void {
    this.filteredCimpanies = this.cities.filter((city) =>
      Object.values(city).some((value: any) =>
        value.toString().toLowerCase().includes(filter.toLowerCase())
      )
    );
  }

  onAdd(): void {
    // Function to handle adding an employee
  }

  onEdit(): void {
    // Function to handle editing an employee
  }

  onDelete(): void {
    // Function to handle deleting an employee
  }

  onAccessRights(): void {
    // Function to handle access rights
  }
}
