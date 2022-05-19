import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template:`
        <h1>{{title}}</h1>
        <h3>la base es :<strong>{{base}}</strong></h3>

        <button (click)="operacion(base)">+{{base}}</button>
        <span>{{numero}}</span>
        <button (click)="operacion(-(base))">-{{base}}</button>
    `
})
export class contadorComponent{
title = 'Contador app'
  numero:number=10
  base:number=5
//con un solo metodo
operacion(valor:number){
  this.numero+=valor;
}

  // sumar(){
  //   this.numero+=1;
  // }
  // restar(){
  //   this.numero-=1;
  // }
}