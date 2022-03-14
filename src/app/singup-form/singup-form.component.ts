import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singup-form',
  templateUrl: './singup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SingupFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  addUser(
    firstname: string,
    lastname: string,
    age: number,
    address: string,
    workplace: string,
    username: string,
    password: string,
    passwordconfirmation: string
  ) {}
}
