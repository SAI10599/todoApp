import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  firstName:string="shiva sai";
  lastName:string="shivva";
  email:string="sai@gmail.com"
  dob:string="10th May, 1999";
  phone:number=487593649;
 //hobbies:["reading books", "Jogging", "Watching Movies"]


}
