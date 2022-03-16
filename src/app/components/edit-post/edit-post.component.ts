import { Component, Input, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  id: string | null = '';
  description: string | null = '';
  imageSorce: string | null = '';
  constructor(
    private postService: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParamMap.get('id');
    this.description = this.route.snapshot.queryParamMap.get('desc');
    this.imageSorce = this.route.snapshot.queryParamMap.get('img');
  }

  updatePost() {
    let newPost: any;
    newPost = {
      id: this.id,
      description: this.description,
      imageSorce: this.imageSorce,
    };
    this.postService.EditPost(newPost);
    this.router.navigate(['/main-feed']).then(() => {
      window.location.reload();
    });
  }
}
