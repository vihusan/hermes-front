import { Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetLoginResponses } from '../../interfaces/usuarios.interface';
import { UsuariosService } from '../../services/usuarios.service';
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent{
  
  loginForm : FormGroup = new FormGroup({
    email: new FormControl(),
    password:  new FormControl()
  });

  constructor(private usuariosService: UsuariosService) { }

  inicioSesion() : void{
    this.usuariosService.login(this.loginForm);
  }
}
