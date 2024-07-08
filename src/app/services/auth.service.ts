import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { User, AccessLevel } from '../models/user';
import { SetUser } from '../state/user.state';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly mockUser: User = new User(
    'user',
    'password',
    AccessLevel.User
  );
  private readonly mockAdmin: User = new User(
    'admin',
    'password',
    AccessLevel.Admin
  );

  constructor(private router: Router, private store: Store) {}

  login(username: string, password: string): Observable<boolean> {
    console.log('Logging in with', username, password);

    // Simulate an API call
    return of(
      (username === this.mockUser.username &&
        password === this.mockUser.password) ||
        (username === this.mockAdmin.username &&
          password === this.mockAdmin.password)
    ).pipe(
      delay(1000),
      map((success) => {
        if (success) {
          const user =
            username === this.mockUser.username
              ? this.mockUser
              : this.mockAdmin;
          this.store.dispatch(new SetUser(user));
          this.router.navigate(['/dashboard']);
        }
        return success;
      })
    );
  }

  logout(): void {
    console.log('Logging out');
    this.store.dispatch(new SetUser(null)); // Clear user state
    this.router.navigate(['/login']);
  }
}
