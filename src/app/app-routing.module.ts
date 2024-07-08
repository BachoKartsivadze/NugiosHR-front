import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDataComponent } from './Tables/employee-data/employee-data.component';
import { CountriesComponent } from './Tables/countries/countries.component';
import { CompaniesComponent } from './Tables/companies/companies.component';
import { BrandsComponent } from './Tables/brands/brands.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'employee-data', component: EmployeeDataComponent },
      { path: 'countries', component: CountriesComponent },
      { path: 'companies', component: CompaniesComponent },
      { path: 'brands', component: BrandsComponent },
    ],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
