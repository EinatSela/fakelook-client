import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  AcMapComponent,
  AcNotification,
  ViewerConfiguration,
  ActionType,
} from 'angular-cesium';
import { map, mergeMap, Observable, of } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { ConverterService } from 'src/app/services/converter.service';
import { PostsService } from 'src/app/services/posts.service';
import { PostViewComponent } from '../post-view/post-view.component';
const randomLocation = require('random-location');

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [ViewerConfiguration],
})
export class MapComponent implements OnInit {
  @Input() posts: Post[] | undefined;

  constructor(
    private converterService: ConverterService,
    public dialog: MatDialog
  ) {}

  @ViewChild('map') map!: AcMapComponent;
  entities$!: Observable<AcNotification>;
  selectedPost!: Post;
  showDialog = false;
  Cesium = Cesium;

  ngOnInit(): void {
    this.entities$ = of(this.posts as Post[]).pipe(
      map((posts) => {
        return posts.map((post) => ({
          id: (post.id + '').toString(),
          actionType: ActionType.ADD_UPDATE,
          entity: this.converterService.postToAcEntity(post),
        }));
      }),
      mergeMap((entity) => entity)
    );
  }

  showFullPost(post: Post) {
    const dialogRefview = this.dialog.open(PostViewComponent, {
      width: '350px',
      data: {
        description: post.description,
        imageSorce: post.imageSorce,
        postId: post.id,
        userId: post.userId,
      },
    });
    dialogRefview.afterClosed().subscribe((data) => {});
  }

  filter(posts: Post[]){
    this.entities$ = of(posts).pipe(
      map((posts) => {
        return posts.map((post) => ({
          id: (post.id + '').toString(),
          actionType: ActionType.ADD_UPDATE,
          entity: this.converterService.postToAcEntity(post),
        }));
      }),
      mergeMap((entity) => entity)
    );
  }
}
