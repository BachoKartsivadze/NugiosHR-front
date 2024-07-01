import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { CountriesComponent } from './countries/countries.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TreeModule } from 'primeng/tree';
import { TableModule } from 'primeng/table'; // Add TableModule here

// NGXS Modules
import { NgxsModule } from '@ngxs/store';
import { UserState } from './state/user.state';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    EmployeeDataComponent,
    CountriesComponent,
    SidebarComponent,
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
    ToolbarModule,
    PanelMenuModule,
    OverlayPanelModule,
    TreeModule,
    TableModule, // Add TableModule here
    NgxsModule.forRoot([UserState]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
