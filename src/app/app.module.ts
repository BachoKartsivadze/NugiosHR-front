import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { EmployeeDataComponent } from './Tables/employee-data/employee-data.component';
import { CountriesComponent } from './Tables/countries/countries.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterService } from './services/filter.service'; // Ensure this path is correct

// PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TreeModule } from 'primeng/tree';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { MenubarModule } from 'primeng/menubar';

// NGXS Modules
import { NgxsModule } from '@ngxs/store';
import { UserState } from './state/user.state';
import { MenuModule } from 'primeng/menu';
import { CompaniesComponent } from './Tables/companies/companies.component';
import { BrandsComponent } from './Tables/brands/brands.component';
import { DepartmentClustersComponent } from './Tables/department-clusters/department-clusters.component';
import { DepartmentsComponent } from './Tables/departments/departments.component';
import { TeamsComponent } from './Tables/teams/teams.component';
import { PositionsComponent } from './Tables/positions/positions.component';
import { RegionsComponent } from './Tables/regions/regions.component';
import { CitiesComponent } from './Tables/cities/cities.component';
import { DialogModule } from 'primeng/dialog';
import { DistrictsComponent } from './Tables/districts/districts.component';
import { AddressesComponent } from './Tables/addresses/addresses.component';
import { OfficesComponent } from './Tables/offices/offices.component';
import { WorkTypeComponent } from './Tables/work-type/work-type.component';
import { UserRolesComponent } from './Tables/user-roles/user-roles.component';
import { OrgChartComponent } from './Tables/org-chart/org-chart.component';
import { DashboardComponent } from './Tables/dashboard/dashboard.component';
import { AddEmployeeFormComponent } from './views/add-employee-form/add-employee-form.component';
import { EditEmployeeFormComponent } from './views/edit-employee-form/edit-employee-form.component';
import { PersonalDataComponent } from './Tables/personal-data/personal-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    MainComponent,
    EmployeeDataComponent,
    CountriesComponent,
    SidebarComponent,
    CompaniesComponent,
    BrandsComponent,
    DepartmentClustersComponent,
    DepartmentsComponent,
    TeamsComponent,
    PositionsComponent,
    RegionsComponent,
    CitiesComponent,
    DistrictsComponent,
    AddressesComponent,
    OfficesComponent,
    WorkTypeComponent,
    UserRolesComponent,
    OrgChartComponent,
    DashboardComponent,
    AddEmployeeFormComponent,
    EditEmployeeFormComponent,
    PersonalDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    DialogModule,
    ToolbarModule,
    PanelMenuModule,
    OverlayPanelModule,
    TreeModule,
    TableModule,
    MultiSelectModule,
    MenuModule,
    MenubarModule,
    NgxsModule.forRoot([UserState]),
  ],
  providers: [FilterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
