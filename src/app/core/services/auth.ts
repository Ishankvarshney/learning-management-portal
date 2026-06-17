import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser = signal<any>(null);

  isAuthenticated = signal(false);

  login() {

    this.currentUser.set({
      id: 1,
      name: 'Admin'
    });

    this.isAuthenticated.set(true);

  }

  logout() {

    this.currentUser.set(null);

    this.isAuthenticated.set(false);

  }

}