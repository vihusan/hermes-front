import { Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetLoginResponses } from '../../interfaces/usuarios.interface';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent{
  private _servicioUrl: string = "http://localhost:8080/hermes";

  loginForm : FormGroup = new FormGroup({
    email: new FormControl(),
    password:  new FormControl()
  });

  constructor(private http : HttpClient) { }


  inicioSesion() : void{
    console.log(this.loginForm.value);

    const paramLogin = new HttpHeaders()
      .append('email', this.loginForm.value.email)
      .append('password', this.loginForm.value.password);

    this.http.get<GetLoginResponses>(`${this._servicioUrl}/auth/login`, {headers : paramLogin})
      .subscribe( resp => {
        console.log(resp.data);
      });
  }
}
