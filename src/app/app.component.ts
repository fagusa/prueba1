import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fanny';
  ciudad= 'Latacunga';
  n1=5;
  n2=8;
  res=this.n1+this.n2;
  msg=`Mi nombre es ${this.title} y vengo de ${this.ciudad}`;
  msgantiguo='hola "con comillas"' + this.title;
}
