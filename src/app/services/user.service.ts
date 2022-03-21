import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { TokenService } from './TokenService';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private getUsrUrl = 'https://localhost:44349/api/Users/ById?id=';
  private user?: User;
  public userId$?: number;
  private tokenservice : TokenService;

  constructor(private http: HttpClient) {
    this.tokenservice = new TokenService(http);
   }

  getUser() : Observable<any>{
    this.tokenservice.getToken().subscribe((res) => {
      this.userId$ = res;
    });

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text',
      }),
    };
    return this.http.get<any>(this.getUsrUrl + this.userId$, httpOptions);
  }
}
