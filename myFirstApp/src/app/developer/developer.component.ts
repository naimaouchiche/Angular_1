import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  developer = {
    firstname : "Bibi",
    lastname : "LeKid",
    age : 47,
    gender : "homme",
    bio : "Bientôt en recherche d'emploi : Je peux pas pisser du code mais je peux le gerber",
    skills :[{
      name: "Formation",
      logo : "https://commons.wikimedia.org/wiki/File:Angular_full_color_logo.svg",
      site: "https://angular.io/"
    }]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
