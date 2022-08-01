import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token = 'MyPrivateToken';

  getToken(): String {
    return this.token;
  }
}
