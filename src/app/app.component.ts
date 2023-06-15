import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro-angular-idgs901';
  alumnos = {
    matricula : 1245,
    nombre : 'Ulises',
    edad: 23,
    fechaNacimiento: new Date(),
    pago:128.39
  }

  calcular(n:number):number{
    return n * 2
  }
}


