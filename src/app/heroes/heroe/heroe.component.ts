import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})
export class heroe{
    nombre:string='iron man'
    edad:number=30

 get nombremayuscula(){
     return this.nombre.toUpperCase();
 }   
metodo():string{
    return `${this.nombre}-${this.edad}`;
}
cambiarnombre(){
    this.nombre='hulk';
}
cambiaredad(){
    this.edad=25;
}}