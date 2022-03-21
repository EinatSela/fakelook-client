import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
    private TokentUrl = 'https://localhost:44349/api/Users/GetToken?token=';
    private token? : string | null;
    private getUsrUrl = 'https://localhost:44349/api/Users/ById?id=';
    private UserId? : number;

  constructor(private http: HttpClient) { }


  getToken(): number | undefined{
    this.token = sessionStorage.getItem('token');
    let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'text',
        }),
      };
    this.http.get<any>(this.TokentUrl + this.token, httpOptions).subscribe((res)=> {this.UserId = res});
    return this.UserId;
  }

  setToken(token: string): void {
    sessionStorage.setItem('token', token);
  }

  // getUserName(id:string) : Observable<any> | undefined{
  //   let httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'text',
  //     }),
  //   };
  // this.user =  this.http.get<any>(this.getUsrUrl + id, httpOptions);
  // return this.user;
  // }
}
