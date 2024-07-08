import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  nodes: TreeNode[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.nodes = [
      {
        label: 'Dashboards',
        icon: 'pi pi-fw pi-sitemap',
        expanded: true,
        children: [
          {
            label: 'Employee Data',
            icon: 'pi pi-fw pi-users',
            data: { route: '/dashboard/employee-data' },
          },
          {
            label: 'Countries',
            icon: 'pi pi-fw pi-globe',
            data: { route: '/dashboard/countries' },
          },
          {
            label: 'Companies',
            icon: 'pi pi-fw pi-building',
            data: { route: '/dashboard/companies' },
          },
          {
            label: 'Brands',
            icon: 'pi pi-fw pi-building',
            data: { route: '/dashboard/brands' },
          },
        ],
      },
    ];
  }

  nodeSelect(event: any): void {
    if (event.node.data && event.node.data.route) {
      this.router.navigateByUrl(event.node.data.route);
    }
  }
}
