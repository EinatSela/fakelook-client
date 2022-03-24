import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Post } from '../models/Post';
import { Query } from '../models/query';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  public postArray?: Post[];
  public postSubject = new BehaviorSubject<Post[]>([]);
  private postUrl = 'https://localhost:44349/Posts/';
  constructor(private http: HttpClient) {}

  public getAllPosts(): Observable<Post[]> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    this.http
      .get<Post[]>(this.postUrl + 'All', httpOptions)
      .subscribe((res) => {
        this.postArray = res;
        this.postSubject.next(res);
      });
    return this.postSubject.asObservable();
  }

  public newPost(post: Post) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    this.http.post<Post>(this.postUrl + 'Add', post, httpOptions).pipe(
      tap((post1) => {
        this.postArray?.push(post1);
        this.postSubject.next(this.postArray!);
      })
    );
  }

  public EditPost(post: any): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.put<Post>(this.postUrl + 'Edit', post, httpOptions);
  }
  public FilterPost(query: Query): Observable<Post[]> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    this.http
      .post<Post[]>(this.postUrl + 'ByQuery', query, httpOptions)
      .subscribe((filterPosts) => {
        this.postArray = filterPosts;
        this.postSubject.next(filterPosts);
      });
    return this.postSubject.asObservable();
  }
}
