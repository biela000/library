import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated: boolean = false;
  public setIsAuthenticated(newValue: boolean) {
    this.isAuthenticated = newValue;
    document.cookie = `isAuthenticated=${this.isAuthenticated}`;
  }
  constructor() { }
}
