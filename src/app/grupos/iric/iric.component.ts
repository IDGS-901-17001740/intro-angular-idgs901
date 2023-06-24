import { Component } from '@angular/core';
import { IAlumnosIric } from '../alumnos-iric';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {

  imageWidth:number = 50
  imageMargin:number = 2
  muestraImg:boolean = true
  listFilter:string = ''
  alumnoTitle!:string

  showImage():void{
    this.muestraImg=!this.muestraImg
  }
  alumnosIric: IAlumnosIric[]=[
    {
      matricula : 1245,
      nombre : 'Ulises',
      edad: 23,
      correo: 'ulises@gmail.com',
      foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBPT1LJRd2h44BTg7iEoWskZqbdv1kbMT1aw&usqp=CAU',
      calif: 10,
    },
    {
      matricula : 124532,
      nombre : 'Pedro',
      edad: 23,
      correo: 'pedro@gmail.com',
      foto: 'https://images.unsplash.com/photo-1603775020644-eb8decd79994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm90b2dyYWYlQzMlQURhJTIwZGUlMjByZXRyYXRvfGVufDB8fDB8fHww&w=1000&q=80',
      calif: 6.8
    },
    {
      matricula : 124554432,
      nombre : 'Michelle',
      edad: 24,
      correo: 'michelle@gmail.com',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJ2Xm_KKsVg9AkpQP5SgfHkjyge4OTy9tVw&usqp=CAU',
      calif: 9.0
    }
  ]

  onCalificaClick(message:string){
    this.alumnoTitle = `alumnos ${message}`
  }
  }

