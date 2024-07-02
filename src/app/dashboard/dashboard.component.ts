import { Component } from '@angular/core';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private filterService: FilterService) {}

  onSearchChanged(searchTerm: string): void {
    this.filterService.setFilter(searchTerm);
  }
}
