/**
 * Autor: Victor Hugo Sánchez Calderón
 * Fecha: 13 Julio 2022
 * Descripción: Administración de menús
 */

import { AfterContentInit, Component, } from '@angular/core';
import { UsuariosService } from 'src/app/usuarios/services/usuarios.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterContentInit{
  _htoken : String;
  
  constructor(private usuariosService : UsuariosService) { }

  ngAfterContentInit(){
    this._htoken = this.usuariosService.getToken();
    console.log(this._htoken);
  }

  logout(): void {
    this.usuariosService.logout();
  }
}
