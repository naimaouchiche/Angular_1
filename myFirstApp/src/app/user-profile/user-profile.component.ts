import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user = {
    name : 'Trump',
    firstName : 'Donald',
    age : 76,
    quote : 'Pouvoir, sexe et Dollars',
    photo : 'http://placekitten.com/g/200/300',
    hidden: false
  };

  constructor() { }



  ngOnInit(): void {
  }

  isAgeHidden(): void {
    this.user.hidden = !this.user.hidden
  }

}