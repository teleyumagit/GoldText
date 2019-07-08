
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

import {RouterModule,Routes} from '@angular/router';
import { UsuariosComponent } from './tablero/usuarios/usuarios.component';

import {RolesService} from './services/roles.service';
import { CursoComponent } from './componentes/curso/curso.component';

import {appMaterial} from './app.material';
import { RolComponent } from './componentes/rol/rol.component';

const routes:Routes = [
   { path: 'curso', component: CursoComponent },
   { path: 'roles', component: RolComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,   
    HeaderComponent,
    MenuComponent,
    UsuariosComponent,
    CursoComponent,
    RolComponent      
  ],
  imports: [
    BrowserModule,  
    BrowserAnimationsModule,  
    RouterModule.forRoot(routes),
    HttpClientModule,
    appMaterial,   
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RolesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
