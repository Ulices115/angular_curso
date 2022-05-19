import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { contadormodule } from './contador/contador.module';
//import { contadorComponent } from './contador/contador/contador.component';

import {  HeroesModule } from './heroes/heroes.module';


// import { heroe } from './heroes/heroe/heroe.component';
// import { ListadoComponent } from './heroes/listado/listado.component';


@NgModule({
  //aqui van los componentes
  declarations: [
    AppComponent,
    //contadorComponent,
    // heroe,
  //ListadoComponent
  ],
  //aqui van los modulos
  imports: [
    BrowserModule,
    HeroesModule,
    contadormodule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
