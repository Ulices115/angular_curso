import { Component } from '@angular/core';




@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class listadoComponent {
  heroes:string[]=['Spiderman','Ironman','Hulk','Thor'];
  heroesBorrados:(string|undefined)[]=[];
  heroeborrado:string='';

  borrarHeroe():void {
    //el pop elimina una dato de areglo y reetorno ese valor
    //undefine indica que se aceptan vacios (arreglo vacio)
    const heroeB:string|undefined=this.heroes.pop();
    //se uso el if para hacer la accion si el areglo no esta vacio
    if(heroeB!==undefined) {
      //guardamos los valores elimiminados en un array
      this.heroesBorrados.push(heroeB);
    }
    //muestra el heroe eliminado al momento
    //se agregan las comillas para indicar que puede recibir vacio
    this.heroeborrado=heroeB||'';
  }

}