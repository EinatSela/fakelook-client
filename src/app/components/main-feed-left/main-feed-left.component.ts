import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/user';
import { TokenService } from 'src/app/services/TokenService';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main-feed-left',
  templateUrl: './main-feed-left.component.html',
  styleUrls: ['./main-feed-left.component.css'],
})
export class MainFeedLeftComponent implements OnInit {
  @Input() userId?: number | undefined;
  @Input() userName?: string;
  public posts$: Post[] | undefined;
  @Output() updatePosts = new EventEmitter<Post[]>();

  constructor(private router: Router, private tokenService: TokenService) {}

  ngOnInit(): void {}
  filter(posts: Post[]) {
    this.posts$ = posts;
    console.log(this.posts$);
    this.updatePosts.emit(posts);
  }
  logout() {
    this.router.navigateByUrl('');
    this.tokenService.deleteToken();
  }
}
