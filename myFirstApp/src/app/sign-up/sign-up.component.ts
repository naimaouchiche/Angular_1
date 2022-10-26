import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
   // Tu instancies ton objet avec des valeurs initiales
   model: User = new User("", "", "", "");

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    // form submitted
    console.log(this.model);
  }

}
