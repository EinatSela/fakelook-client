import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { PostsService } from 'src/app/services/posts.service';
import { TagsService } from 'src/app/services/tags.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  id: string | null = '';
  ErrorMsg: boolean = false;
  description: string = '';
  imageSorce: string = '';
  date: Date;
  x_Position: number = 0;
  y_Position: number = 0;
  z_Position: number = 0;
  userId: number = 0;
  longitude: number = 0;
  latitude: number = 0;

  constructor(
    private postService: PostsService,
    private router: Router,
    private route: ActivatedRoute,
    private tagService : TagsService
  ) {
    this.date = new Date();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParamMap.get('id');
    this.getLocation();
  }
  createPost() {
    let newPost: Post;
    if (this.imageSorce == '') {
      this.ErrorMsg = true;
      return;
    }
    newPost = {
      description: this.description,
      imageSorce: this.imageSorce,
      date: new Date(),
      x_Position: this.x_Position,
      y_Position: this.y_Position,
      z_Position: this.z_Position,
      userId: Number(this.id),
      tags : this.tagService.createTags(this.description),
    };
    this.postService.newPost(newPost);
    this.router.navigate(['main-feed']).then(() => {
    });
  }
  public getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.longitude = position.coords.longitude;
        this.latitude = position.coords.latitude;
        this.updatePosition();
      });
    } else {
      console.log('No support for geolocation');
    }
  }

  public updatePosition() {
    var R = 6371;
    var position = Cesium.Cartesian3.fromDegrees(this.longitude, this.latitude);
    this.x_Position = position.x;
    this.y_Position = position.y;
    this.z_Position = position.z;
  }
}
