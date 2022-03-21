import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ILike } from 'src/app/models/Ilike';
import { IPost } from 'src/app/models/IPost';
import { LikesService } from 'src/app/services/likes.service';
import { TokenService } from 'src/app/services/TokenService';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditPostComponent } from '../edit-post/edit-post.component';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post!: IPost;
  public userId$?: number;
  public likes$?: any[];
  public LikeBtn: boolean = true;

  constructor(public dialog: MatDialog, private postService: PostsService) {}

  ngOnInit(): void {
    // this.likesService
    //   .getLikesByPostId(this.post.id)
    //   .subscribe((res) => (this.likes$ = res));
    // this.tokenService.getToken().subscribe((res) => {
    //   this.userId$ = res;
    // });
  }
  Edit(): void {
    const dialogRef = this.dialog.open(EditPostComponent, {
      width: '350px',
      data: {
        description: this.post.description,
        img: this.post.imageSorce,
        id: this.post.id,
      },
    });
    dialogRef.afterClosed().subscribe((data) => {
      console.log(data);
      this.post.imageSorce = data.imageSorce;
      this.post.description = data.description;
      this.update();
    });
  }
  update() {
    this.postService.EditPost(this.post).subscribe();
  }
  //     addLike() {
  //       this.LikeBtn = !this.LikeBtn;
  //       let like: ILike;
  //       like = {
  //         userId: this.userId$!,
  //         postId: this.post.id,
  //         isActive: true,
  //       };
  //       this.likesService.addLike(like);
  //       window.location.reload();
  //       return false;
  //     }
  //   }
  // }
}
