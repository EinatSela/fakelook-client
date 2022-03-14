import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private postUrl = 'https://localhost:44349/Posts/All';
  constructor(private http: HttpClient) {}

  public getAllPosts(): Observable<any[]> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<any>(this.postUrl, httpOptions);
  }
}
