import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
import { TokenService } from 'src/app/services/TokenService';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  public posts$: Observable<any> | undefined;
  public tokenID$ :Observable<any> | undefined;
  
  constructor(private postsService: PostsService, private tokenService : TokenService) {
  }

  ngOnInit(): void {
    this.posts$ = this.postsService.getAllPosts();
    this.tokenID$ = this.tokenService.getToken();
  }
}
