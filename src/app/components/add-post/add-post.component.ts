import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from 'src/app/models/IPost';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  id: string | null = '';
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
    private route: ActivatedRoute
  ) {
    this.date = new Date();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParamMap.get('id');
    this.getLocation();
  }
  createPost() {
    let newPost: IPost;
    newPost = {
      description: this.description,
      imageSorce: this.imageSorce,
      date: new Date(),
      x_Position: this.x_Position,
      y_Position: this.y_Position,
      z_Position: this.z_Position,
      userId: Number(this.id),
    };
    this.postService.newPost(newPost);
    this.router.navigate(['main-feed']).then(() => {
      window.location.reload();
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
    this.x_Position = R * Math.cos(this.latitude) * Math.cos(this.longitude);
    this.y_Position = R * Math.cos(this.latitude) * Math.sin(this.longitude);
    this.z_Position = R * Math.sin(this.latitude);
  }
}
