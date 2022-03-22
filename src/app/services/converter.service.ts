import { Injectable } from '@angular/core';
import { AcEntity } from 'angular-cesium';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root',
})
export class ConverterService {
  constructor() {}

  postToAcEntity(post: Post): AcEntity {
    return {
      id : post.id,
      description : post.description,
      imageSorce : post.imageSorce,
      user: post.userId,
      location: new Cesium.Cartesian3(post.x_Position, post.y_Position, post.z_Position)
    };
  }
}
