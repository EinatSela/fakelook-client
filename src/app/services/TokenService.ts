import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }


  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  setToken(token: string): void {
    sessionStorage.setItem('token', token);
  }
}
