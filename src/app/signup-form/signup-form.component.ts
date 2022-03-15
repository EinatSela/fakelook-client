import { Component, OnInit } from '@angular/core';
import user from 'src/app/models/user';
import { SignUpService } from 'src/app/services/sign-up.service';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  // public posts$: Observable<any> | undefined;


  newUser? : user;


  constructor(private signupService: SignUpService) { }

  ngOnInit(): void {
  }

  addUser(newFirstname:string, newLastname:string, newAge:string, newAddress:string, 
    newWorkplace:string, newUsername:string, newPassword:string, newPasswordconfirmation:string)
    {
      if(newPassword != newPasswordconfirmation)
      {

      }
      if (newFirstname&& newLastname&& newAge&& newAddress&&newWorkplace&& newUsername&& newPassword&& newPasswordconfirmation)
      {
        this.newUser = {
        FirstName : newFirstname,
        LastName : newLastname,
        UserName : newUsername,
        WorkPlace : newWorkplace,
        Password : newPassword,
        Address : newAddress,
        Age : newAge
        };
        this.signupService.addUser(this.newUser);
      }
    }

}
