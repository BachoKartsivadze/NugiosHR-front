import { Component } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { Position } from '../../models/positions.model';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrl: './positions.component.css',
})
export class PositionsComponent {
  positions: Position[] = [
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
    this.filteredCimpanies = this.positions.filter((position) =>
      Object.values(position).some((value: any) =>
        value.toString().toLowerCase().includes(filter.toLowerCase())
      )
    );
  }
}
