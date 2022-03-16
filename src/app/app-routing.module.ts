import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './components/posts/posts.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { MainFeedComponent } from './components/main-feed/main-feed.component';

const routes: Routes = [
  { path: 'signup', component: SignupFormComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: '', component: SignInComponent },
  {path: 'main-feed', component : MainFeedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
