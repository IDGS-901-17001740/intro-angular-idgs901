import { Component } from '@angular/core';
@Component({
  selector: 'app-env',
  template:`<div><b>Matricula:</b> {{ alumnos.matricula }}</div>
  <div><b>Nombre:</b> {{ alumnos.nombre | uppercase}}</div>
  <div><b>Edad:</b> {{ alumnos.edad }}</div>
  <div><b>Fecha Nacimiento:</b> {{ alumnos.fechaNacimiento | date}}</div>
  <div><b>Pago:</b> {{ alumnos.pago | currency}}</div>`
})

export class EnvComponent{
  alumnos = {
    matricula : 4534323,
    nombre : 'Claudio',
    edad: 21,
    fechaNacimiento: new Date(),
    pago:128.39
  }
}
