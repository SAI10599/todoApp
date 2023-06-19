import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Signup',
  templateUrl: './Signup.component.html',
  styleUrls: ['./Signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
    firstName: string="";
    lastName: string="";
    email: string="";
    password: string="";
    phone: string="";
    dob: string="";
  
    signup() {
      
      console.log('First Name:', this.firstName);
      console.log('Last Name:', this.lastName);
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      console.log('Phone:', this.phone);
      console.log('Date of Birth:', this.dob);
      
    }

}
