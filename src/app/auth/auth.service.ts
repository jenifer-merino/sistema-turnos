import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isLogged = false;

  login(email: string, password: string): boolean {
    if (email === 'admin@test.com' && password === '123456') {
      this.isLogged = true;
      return true;
    }
    return false;
  }

  isAuthenticated(): boolean {
    return this.isLogged;
  }

  logout() {
    this.isLogged = false;
  }
}
