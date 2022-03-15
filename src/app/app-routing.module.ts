import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './components/posts/posts.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  {path: 'signup', component:SignupFormComponent},
  {path: 'signin', component : SignInComponent},
  {path : 'posts', component:PostsComponent},
  {path: '', component : SignInComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
