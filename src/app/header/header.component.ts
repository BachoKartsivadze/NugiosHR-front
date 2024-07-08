import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  showLogoutButton = false;

  constructor(private authService: AuthService, private router: Router) {}

  @Output() searchChanged = new EventEmitter<string>();
  @ViewChild('op') overlayPanel: OverlayPanel = {} as OverlayPanel;

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchChanged.emit(input.value);
  }

  toggleDropdown(event: Event) {
    this.overlayPanel.toggle(event);
  }

  toggleLogout(): void {
    this.showLogoutButton = !this.showLogoutButton;
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
