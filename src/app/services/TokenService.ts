import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private TokentUrl = 'https://localhost:44349/api/Users/GetToken?token=';
  private token?: string | null;

  constructor(private http: HttpClient, private router : Router) {}

  getToken(): Observable<any> {
    this.token = sessionStorage.getItem('token');
    let httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'text'}),
    };
    return this.http.get<any>(this.TokentUrl + this.token, httpOptions);
  }

  setToken(token: string): void {
    sessionStorage.setItem('token', token);
  }

  deleteToken(){
    sessionStorage.removeItem('token');
  }
}
