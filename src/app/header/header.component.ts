import { Component, ViewChild } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { UserState } from '../state/user.state';
import { User } from '../models/user';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @ViewChild('overlay') overlay!: OverlayPanel;
  @Select(UserState.getUser) user$!: Observable<User | null>;

  constructor(private authService: AuthService, private store: Store) {}

  onAddAccount(): void {
    console.log('Add Account button clicked');
    // Placeholder for add account logic
  }

  toggleOverlay(event: Event): void {
    this.overlay.toggle(event);
  }

  onLogout(): void {
    this.authService.logout();
  }
}
