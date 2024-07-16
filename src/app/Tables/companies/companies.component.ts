import { Component } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { Company } from '../../models/company.model';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css',
})
export class CompaniesComponent {
  companies: Company[] = [
    {
      name: 'Nugios Technology',
      company_id: '00000',
      country_iso: '00000',
      holding_id: '123456',
      country: 'Georgia',
    },
    {
      name: 'Nugios Systems',
      company_id: '00001',
      country_iso: '00001',
      holding_id: '213456',
      country: 'Georgia',
    },
    {
      name: 'Rustar Tourism',
      company_id: '00002',
      country_iso: '00002',
      holding_id: '312456',
      country: 'Georgia',
    },
    {
      name: 'Rustar Online',
      company_id: '00003',
      country_iso: '00003',
      holding_id: '412356',
      country: 'Georgia',
    },
    {
      name: 'Standart Oil',
      company_id: '00004',
      country_iso: '00004',
      holding_id: '512346',
      country: 'USA',
    },
    {
      name: 'British Petrolium',
      company_id: '00005',
      country_iso: '00005',
      holding_id: '612345',
      country: 'GB',
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
    this.filteredCimpanies = this.companies.filter((company) =>
      Object.values(company).some((value: any) =>
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
