import { Component } from '@angular/core';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  constructor(private filterService: FilterService) {}

  onSearchChanged(searchTerm: string): void {
    this.filterService.setFilter(searchTerm);
  }
}
