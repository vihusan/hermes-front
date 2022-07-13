import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GetUsuariosResponses, PostUsuariosResponses } from '../../interfaces/usuarios.interface';
import { UsuariosService } from '../../services/usuarios.service';
@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent{
  constructor (private http: HttpClient,
               private usuariosService : UsuariosService){}

  crearUsuarioForm = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });
  private _servicioUrl: string = "http://localhost:8080/hermes";
  
  crearUsusario(): void{ 
    this.crearUsuarioForm.value.role = "USER_ROLE";
    console.log(this.crearUsuarioForm.value);
    this.http.post<PostUsuariosResponses>(`${this._servicioUrl}/usuarios`, this.crearUsuarioForm.value)
      .subscribe( resp => {
        console.log(resp);
        this.usuariosService.loginCreateUser(resp.token);
      });
  }
}
