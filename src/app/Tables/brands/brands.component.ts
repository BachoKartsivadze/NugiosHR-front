import { Component } from '@angular/core';
import { FilterService } from '../../services/filter.service'; // Adjust path if necessary
import { Brand } from '../../models/brands.model';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css',
})
export class BrandsComponent {
  brands: Brand[] = [
    {
      name: 'Kazunion LTD',
      company_count: 7,
      country: 'Kazakhstan',
      Note: 'No note',
    },
    { name: 'Nugios', company_count: 2, country: 'Georgia', Note: 'No note' },
    { name: 'Rustar', company_count: 3, country: 'UAE', Note: 'No note' },
    { name: 'Brand4', company_count: 5, country: 'USA', Note: 'No note' },
  ];
  filteredBrands: any[] = [];

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.filterService.filter$.subscribe((filter) => {
      this.applyFilter(filter);
    });
  }

  applyFilter(filter: string): void {
    this.filteredBrands = this.brands.filter((brand) =>
      Object.values(brand).some((value: any) =>
        value.toString().toLowerCase().includes(filter.toLowerCase())
      )
    );
  }
}
