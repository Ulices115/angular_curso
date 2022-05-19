import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { contadorComponent } from './contador/contador.component';

@NgModule({
    //componentes relacionados
    declarations: [
        contadorComponent
    ],
    imports: [ CommonModule ],
    //componentes relacionados
    exports: [
        contadorComponent
    ],
    providers: [],
})
export class contadormodule {} ;