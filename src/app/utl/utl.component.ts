import { Component } from '@angular/core';

@Component({
  //?Nombre del componente
  selector: 'app-utl',
  template: `
    <form>
      <label for="">Nombre:</label>
      <input type="text" value="">
      <button class="btn btn-primary">Ingresa</button>
    </form>`
})

export class UtlComponet{
  constructor(){}
}
