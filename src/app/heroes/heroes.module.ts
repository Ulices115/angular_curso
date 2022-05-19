import {    NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { heroe } from './heroe/heroe.component';
import { listadoComponent } from './listado/listado.component';


@NgModule({
    //aqui van los componentes
    declarations: [
        heroe,
        listadoComponent
    ],
    //solo modulos
    imports: [ 
        CommonModule
    ],
    //visibles afuera de este modulo
    exports: [
        listadoComponent
    ],
    providers: [],
})
export class HeroesModule {} ;