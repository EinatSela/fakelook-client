import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';
import { Tag } from '../models/tag';


@Injectable({
  providedIn: 'root'
})
export class TagsService {

  private addUrl = 'https://localhost:44349/api/Tags/Add';
  private ByPostUrl = 'https://localhost:44349/api/Tags/ByPost?id=';
  private ByCommentUrl= 'https://localhost:44349/api/Tags/ByComment?id='

  constructor(private http: HttpClient) { 

  }

  public addTag(newTag: Tag) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    this.http.post<Tag>(this.addUrl, newTag, httpOptions).subscribe();
  }

  public GetByPost(id : number): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text',
      }),
    };
    return this.http.get<any>(this.ByPostUrl + id, httpOptions);
  }

  public GetByComment(id : number): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text',
      }),
    };
    return this.http.get<any>(this.ByCommentUrl + id, httpOptions);
  }

  createTags(desc : string): Tag[]{
    let tags : Tag[] = []; 
    const indexes = [];

    for (let index = 0; index < desc.length; index++) {
      if (desc[index] === '#') {
        indexes.push(index);
      }
    }
    indexes.forEach(index => {
      let tagContent = desc.substring(index+1);
      if(tagContent.indexOf(' ')!= null && tagContent.indexOf(' ')!= -1)
      {
        tagContent = tagContent.substring(0,tagContent.indexOf(' '));
      }
      let tag : Tag; 
      tag = {
        content : tagContent
      }
      tags.push(tag);
    });
    return tags;
  }




}
