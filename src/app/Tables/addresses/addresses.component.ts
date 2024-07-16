import { Component } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { Address } from '../../models/addresses.model';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrl: './addresses.component.css',
})
export class AddressesComponent {
  addresses: Address[] = [
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
    this.filteredCimpanies = this.addresses.filter((address) =>
      Object.values(address).some((value: any) =>
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
