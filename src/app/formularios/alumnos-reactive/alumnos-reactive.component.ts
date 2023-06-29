import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-alumnos-reactive',
  templateUrl: './alumnos-reactive.component.html',
  styleUrls: ['./alumnos-reactive.component.css']
})
export class AlumnosReactiveComponent {
  alumnoForm!:FormGroup
  matricula!:string
  nombre!:string
  edad!:string
  correo!:string
  calif!:string
  foto!:string

  constructor(private readonly fb: FormBuilder){
    this.alumnoForm = this.initForm()
  }

  onSubmit():void{
    //console.log('Form ->' ,this.alumnoForm.value)
    this.obtenerDatos()
  }

  obtenerDatos():void{
    this.matricula = this.alumnoForm.get('matricula')?.value
    this.nombre = this.alumnoForm.get('nombre')?.value
    this.edad = this.alumnoForm.get('edad')?.value
    this.correo = this.alumnoForm.get('correo')?.value
    this.calif = this.alumnoForm.get('calif')?.value
    this.foto = this.alumnoForm.get('foto')?.value

  }

  initForm():FormGroup{
    return this.fb.group({
      matricula : ['',[Validators.required,Validators.minLength(5)]],
      nombre : ['',[Validators.required,Validators.minLength(3)]],
      edad: ['',[Validators.required]],
      correo: ['',[Validators.required]],
      foto: [''],
      calif: ['',[Validators.required]]
    })
  }
}
