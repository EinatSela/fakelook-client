import { NgModule } from '@angular/core';
import { AngularCesiumModule } from 'angular-cesium';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { PostsComponent } from './components/posts/posts.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { HeaderComponent } from './components/header/header.component';
import { MainFeedComponent } from './components/main-feed/main-feed.component';
import { PostComponent } from './components/post/post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { MapComponent } from './components/map/map.component';
import { MatCardModule } from '@angular/material/card';

import { PostViewComponent } from './components/post-view/post-view.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MainFeedLeftComponent } from './components/main-feed-left/main-feed-left.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    PostsComponent,
    SignupFormComponent,
    AddPostComponent,
    HeaderComponent,
    MainFeedComponent,
    PostComponent,
    EditPostComponent,
    MapComponent,
    PostViewComponent,
    MainFeedLeftComponent,
    ChangePasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    AngularCesiumModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
