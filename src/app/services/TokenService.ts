import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private TokentUrl = 'https://localhost:44349/api/Users/GetToken?token=';
  private token?: string | null;
  private getUsrUrl = 'https://localhost:44349/api/Users/ById?id=';
  private user?: User;
  private userId?: number;


  constructor(private http: HttpClient) {}

  getToken(): Observable<any> {
    this.token = sessionStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text',
      }),
    };
    return this.http.get<any>(this.TokentUrl + this.token, httpOptions);
  }

  setToken(token: string): void {
    sessionStorage.setItem('token', token);
  }

}
