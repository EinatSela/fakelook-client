import { Component, OnInit } from '@angular/core';
import { defaultIfEmpty, iif, map } from 'rxjs';
import { User } from '../models/user';
import { SignUpService } from '../services/sign-up.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  // public posts$: Observable<any> | undefined;

  newUser?: User;
  ValErrorMsg: boolean = false;
  PassErrorMsg: boolean = false;



  constructor(private signupService: SignUpService,
    private userService : UserService) {}

  ngOnInit(): void {}

  addUser(
    newFirstname: string,
    newLastname: string,
    newAge: string,
    newAddress: string,
    newWorkplace: string,
    newUsername: string,
    newPassword: string,
    newPasswordconfirmation: string
  ) {
    this.PassErrorMsg = false;
    this.ValErrorMsg = false;

    if (
      newFirstname &&
      newLastname &&
      newAge &&
      newAddress &&
      newWorkplace &&
      newUsername &&
      newPassword &&
      newPasswordconfirmation
    ) {
      if (newPassword != newPasswordconfirmation) {
        this.PassErrorMsg = true;
      } else{
        this.newUser = {
          FirstName: newFirstname,
          LastName: newLastname,
          userName: newUsername,
          WorkPlace: newWorkplace,
          password: newPassword,
          Address: newAddress,
          Age: newAge,
        };

        this.userService.getUserByName(newUsername).pipe(
          map((res)=>{console.log(res)}),
          defaultIfEmpty(this.signupService.addUser(this.newUser))
        );
        // this.signupService.addUser(this.newUser);
      }
    }
    else{
      this.ValErrorMsg = true;
    }
  }
}
