import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private postUrl = 'https://localhost:44349/Posts/';
  constructor(private http: HttpClient) {}

  public getAllPosts(): Observable<any[]> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<any>(this.postUrl + 'All', httpOptions);
  }
  public newPost(post: Post) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    this.http.post<Post>(this.postUrl + 'Add', post, httpOptions).subscribe();
  }
  public EditPost(post: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    this.http.put<Post>(this.postUrl + 'Edit', post, httpOptions).subscribe();
  }
}
