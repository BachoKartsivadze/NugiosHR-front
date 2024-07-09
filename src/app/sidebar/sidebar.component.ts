import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TreeNode } from 'primeng/api';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  nodes: TreeNode[] = [];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.nodes = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-th-large',
        data: { route: '/dashboard' },
      },
      {
        label: 'Org. Chart',
        icon: 'pi pi-fw pi-chart-bar',
        data: { route: '/org-chart' },
      },
      {
        label: 'Employee Data',
        icon: 'pi pi-fw pi-id-card',
        data: { route: '/dashboard/employee-data' },
      },
      {
        label: 'Libraries',
        icon: 'pi pi-fw pi-book',
        expanded: true,
        children: [
          {
            label: 'Brands',
            data: { route: '/libraries/brands' },
          },
          {
            label: 'Companies',
            data: { route: '/libraries/companies' },
          },
          {
            label: 'Department Clusters',
            data: { route: '/libraries/department-clusters' },
          },
          {
            label: 'Departments',
            data: { route: '/libraries/departments' },
          },
          {
            label: 'Teams',
            data: { route: '/libraries/teams' },
          },
          {
            label: 'Positions',
            data: { route: '/libraries/positions' },
          },
          {
            label: 'Countries',
            data: { route: '/libraries/countries' },
          },
          {
            label: 'Regions',
            data: { route: '/libraries/regions' },
          },
          {
            label: 'Cities',
            data: { route: '/libraries/cities' },
          },
          {
            label: 'Districts',
            data: { route: '/libraries/districts' },
          },
          {
            label: 'Addresses',
            data: { route: '/libraries/addresses' },
          },
          {
            label: 'Offices',
            data: { route: '/libraries/offices' },
          },
          {
            label: 'Work Type',
            data: { route: '/libraries/work-type' },
          },
          {
            label: 'User Roles',
            data: { route: '/libraries/user-roles' },
          },
        ],
      },
    ];
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  nodeSelect(event: any): void {
    if (event.node.data && event.node.data.route) {
      this.router.navigateByUrl(event.node.data.route);
    }
  }
}
