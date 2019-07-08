import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import { CursoComponent } from './componentes/curso/curso.component';


const routes:Routes = [   
    { path: 'curso', component: CursoComponent }
    ];

@NgModule({
    declarations: [
     CursoComponent,       
      ],
imports:[

],
exports:[
   
]
    })

export class appRoutes{};