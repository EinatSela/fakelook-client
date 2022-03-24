import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  AcMapComponent,
  AcNotification,
  ViewerConfiguration,
  ActionType,
} from 'angular-cesium';
import { map, mergeMap, Observable, of, pairwise } from 'rxjs';
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
    public dialog: MatDialog,
    private postService: PostsService
  ) {}

  @ViewChild('map') map!: AcMapComponent;
  entities$!: Observable<AcNotification>;
  selectedPost!: Post;
  showDialog = false;
  Cesium = Cesium;

  ngOnInit(): void {
    this.initMap();
  }
  initMap() {
    this.entities$ = this.postService.getAllPosts().pipe(
      pairwise(),
      map((posts) => {
        const combine = posts[0].concat(posts[1]);
        return combine.map((post) => ({
          id: (post.id + '').toString(),
          actionType: this.getActionType(post, posts[1]),
          entity: this.converterService.postToAcEntity(post),
        }));
      }),
      mergeMap((entity) => entity)
    );
    console.log(this.entities$);
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
  getActionType(post: Post, newPosts: Post[]): ActionType {
    let action;
    newPosts.find((p) => p.id === post.id)
      ? (action = ActionType.ADD_UPDATE)
      : (action = ActionType.DELETE);
    return action;
  }
}
