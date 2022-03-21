import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SignInService } from 'src/app/services/sign-in.service';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/Iuser';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  user?: IUser;
  constructor(private signInService: SignInService, private router: Router) {}

  ngOnInit(): void {}

  goToSignup() {
    this.router.navigate(['/signup']);
    console.log('clicked');
  }

  login(NewUserName: string, newPassword: string) {
    this.user = {
      userName: NewUserName,
      Password: newPassword,
    };
    //check if login is legal
    this.signInService.login(this.user);
  }
}
