import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Dashboards',
        icon: 'pi pi-fw pi-sitemap',
        expanded: true,
        items: [
          {
            label: 'Employee Data',
            icon: 'pi pi-fw pi-users',
            command: () => this.navigateToDashboard('/dashboard/employee-data'),
          },
          {
            label: 'Countries',
            icon: 'pi pi-fw pi-globe',
            command: () => this.navigateToDashboard('/dashboard/countries'),
          },
        ],
      },
    ];
  }

  navigateToDashboard(route: string): void {
    this.router.navigateByUrl(route);
  }
}
