import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControlName,FormControl, FormGroup ,Validators} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor( private http:HttpClient) { }

  //VALIDACIONES
   
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    nombre: new FormControl('',Validators.required)
  });

  getRoles(){   
  // return this.http.get<Roles[]>('http://127.0.0.1:8000/api/rol');
  }

}

