import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token!: String;

  getToken(): String {
    return this.token;
  }

  login(): void {
    this.token = 'MyPrivateToken';
  }
}
