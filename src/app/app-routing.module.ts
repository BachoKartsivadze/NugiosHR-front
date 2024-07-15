import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { EmployeeDataComponent } from './Tables/employee-data/employee-data.component';
import { CountriesComponent } from './Tables/countries/countries.component';
import { CompaniesComponent } from './Tables/companies/companies.component';
import { BrandsComponent } from './Tables/brands/brands.component';
import { DepartmentClustersComponent } from './Tables/department-clusters/department-clusters.component';
import { DepartmentsComponent } from './Tables/departments/departments.component';
import { TeamsComponent } from './Tables/teams/teams.component';
import { PositionsComponent } from './Tables/positions/positions.component';
import { RegionsComponent } from './Tables/regions/regions.component';
import { CitiesComponent } from './Tables/cities/cities.component';
import { DistrictsComponent } from './Tables/districts/districts.component';
import { AddressesComponent } from './Tables/addresses/addresses.component';
import { OfficesComponent } from './Tables/offices/offices.component';
import { WorkTypeComponent } from './Tables/work-type/work-type.component';
import { UserRolesComponent } from './Tables/user-roles/user-roles.component';
import { OrgChartComponent } from './Tables/org-chart/org-chart.component';
import { DashboardComponent } from './Tables/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },

      { path: 'employee-data', component: EmployeeDataComponent },

      { path: 'org-chart', component: OrgChartComponent },
    ],
  },
  {
    path: 'libraries',
    component: MainComponent,
    children: [
      { path: 'countries', component: CountriesComponent },
      { path: 'companies', component: CompaniesComponent },
      { path: 'brands', component: BrandsComponent },
      { path: 'department-clusters', component: DepartmentClustersComponent },
      { path: 'departments', component: DepartmentsComponent },
      { path: 'teams', component: TeamsComponent },
      { path: 'positions', component: PositionsComponent },
      { path: 'regions', component: RegionsComponent },
      { path: 'cities', component: CitiesComponent },
      { path: 'districts', component: DistrictsComponent },
      { path: 'addresses', component: AddressesComponent },
      { path: 'offices', component: OfficesComponent },
      { path: 'work-type', component: WorkTypeComponent },
      { path: 'user-roles', component: UserRolesComponent },
    ],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
