import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  username: string="";
  password: string="";

  login() {
    // Add your login logic here
    console.log('Email:', this.username);
    console.log('Password:', this.password);
    // Additional login code...
  }

}
