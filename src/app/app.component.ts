import { Component, OnInit } from '@angular/core';
import { RolesService } from './services/roles.service';

import {Roles} from './models/roles'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit {
  
  roles:Roles[] = [];

  constructor(public rolesService:RolesService){}

  ngOnInit(){
   
  }

}

