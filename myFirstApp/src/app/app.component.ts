import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenue sur le site de Moi! Mon premier projet Angular';


  isThisIngredientVital: boolean = true;


  constructor() { }
  onomatopoeiaList: Array<string>= []


  onReceiveNewOnomatopia(event:string): void {
    console.log(event);
    this.onomatopoeiaList.push(event);
}
}
