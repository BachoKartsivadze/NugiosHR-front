import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../services/filter.service'; // Adjust path if necessary
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  countries: Country[] = [
    { name: 'GEO', iso: '00000', country_iso: '00000', flag: 'flag of GEO' },
    { name: 'AZE', iso: '00001', country_iso: '00001', flag: 'flag of AZE' },
    { name: 'UAE', iso: '00002', country_iso: '00002', flag: 'flag of UAE' },
    { name: 'KAZ', iso: '00003', country_iso: '00003', flag: 'flag of KAZ' },
    { name: 'TUR', iso: '00004', country_iso: '00004', flag: 'flag of TUR' },
    { name: 'QAT', iso: '00005', country_iso: '00005', flag: 'flag of QAT' },
  ]; // Replace with actual country data
  filteredCountries: any[] = [];

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.filterService.filter$.subscribe((filter) => {
      this.applyFilter(filter);
    });
  }

  applyFilter(filter: string): void {
    this.filteredCountries = this.countries.filter((country) =>
      Object.values(country).some((value: any) =>
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
