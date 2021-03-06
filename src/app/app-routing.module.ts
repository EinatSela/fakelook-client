import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './components/posts/posts.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { MainFeedComponent } from './components/main-feed/main-feed.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { MapComponent } from './components/map/map.component';
import { PostViewComponent } from './components/post-view/post-view.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

const routes: Routes = [
  { path: 'signup', component: SignupFormComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: 'edit-post', component: EditPostComponent },
  { path: 'main-feed', component: MainFeedComponent },
  { path: 'post-view', component: PostViewComponent },
  { path: '', component: SignInComponent },
  { path: 'map', component: MapComponent },
  { path: '', component: PostsComponent },
  {path: 'change-password', component : ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
