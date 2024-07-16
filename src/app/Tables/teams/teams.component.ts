import { Component } from '@angular/core';
import { Team } from '../../models/teams.model';

import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css',
})
export class TeamsComponent {
  teams: Team[] = [
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
    this.filteredCimpanies = this.teams.filter((team) =>
      Object.values(team).some((value: any) =>
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
