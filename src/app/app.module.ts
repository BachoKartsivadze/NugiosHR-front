import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { OverlayPanelModule } from 'primeng/overlaypanel';

// NGXS Modules
import { NgxsModule } from '@ngxs/store';
import { UserState } from './state/user.state';
import { EmployeeDataComponent } from './employee-data/employee-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    EmployeeDataComponent,
    // Add other components here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, // Add ReactiveFormsModule to imports
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    ToolbarModule,
    PanelMenuModule,
    OverlayPanelModule,
    NgxsModule.forRoot([UserState]), // Register NGXS state
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
