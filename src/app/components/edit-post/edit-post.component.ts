import { Component, EventEmitter, Inject, Input, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/models/IPost';
import { PostsService } from 'src/app/services/posts.service';

import { PostComponent } from '../post/post.component';
export interface PostData {
  description: string;
  imageSorce: string;
  id: number;
}
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent {
  afterEdit?: Observable<IPost>;
  constructor(
    public dialogRef: MatDialogRef<EditPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PostData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  // update() {
  //   let newPost: any;
  //   newPost = {
  //     id: this.data.id,
  //     description: this.data.description,
  //     imageSorce: this.data.imageSorce,
  //   };
  //   this.postService.EditPost(newPost).subscribe((newPost) => {});
  //   this.dialogRef.close();
  // }
}
