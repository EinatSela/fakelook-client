import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Like } from 'src/app/models/like';
import { Post } from 'src/app/models/Post';
import { LikesService } from 'src/app/services/likes.service';
import { TokenService } from 'src/app/services/TokenService';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditPostComponent } from '../edit-post/edit-post.component';
import { PostsService } from 'src/app/services/posts.service';
import { PostViewComponent } from '../post-view/post-view.component';
import { TagsService } from 'src/app/services/tags.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post!: Post;
  @Input() userId?: number;
  public userName: string = '';
  public likes$?: any[];
  public LikeBtn: boolean = true;

  constructor(
    public dialog: MatDialog,
    private postService: PostsService,
    private userService: UserService,
    private tagService : TagsService
  ) {}

  ngOnInit(): void {
    this.userName = this.userService.dict[this.post.userId];
  }
  Edit(): void {
    const dialogRef = this.dialog.open(EditPostComponent, {
      width: '350px',
      data: {
        description: this.post.description,
        imageSorce: this.post.imageSorce,
        id: this.post.id,
      },
    });
    dialogRef.afterClosed().subscribe((data) => {
      this.post.imageSorce = data.imageSorce;
      this.post.description = data.description;
      this.post.tags = this.tagService.createTags(data.description),

      this.update();
    });
  }
  OpenFullView() {
    const dialogRefview = this.dialog.open(PostViewComponent, {
      width: '350px',
      data: {
        description: this.post.description,
        imageSorce: this.post.imageSorce,
        postId: this.post.id,
        userId: this.post.userId,
      },
    });
    dialogRefview.afterClosed().subscribe((res) => {
      if (!res) {
        this.addLike();
      }
    });
  }
  update() {
    console.log(this.post);
    this.postService.EditPost(this.post).subscribe();
  }

  addLike() {
    throw new Error('Function not implemented.');
  }

  
}
