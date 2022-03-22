import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private TokentUrl = 'https://localhost:44349/api/Users/GetToken?token=';
  private token?: string | null;

  constructor(private http: HttpClient) {}

  getToken(): Observable<any> {
    var exp = sessionStorage.getItem('expTime');
    if((exp != null) && (new Date(exp) < new Date()))
    { 
     
    }
    let d = new Date();
    d.setMinutes(d.getMinutes()+15);
    sessionStorage.setItem('expTime', d.toDateString());
    
    this.token = sessionStorage.getItem('token');
    let httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'text'}),
    };
    return this.http.get<any>(this.TokentUrl + this.token, httpOptions);
  }

  setToken(token: string): void {
    let d = new Date();
    d.setMinutes(d.getMinutes()+15);
    sessionStorage.setItem('expTime', d.toDateString());
    sessionStorage.setItem('token', token);
  }

  deleteToken(){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('expTime');
  }
}
