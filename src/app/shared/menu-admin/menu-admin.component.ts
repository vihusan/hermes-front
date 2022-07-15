import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/usuarios/services/usuarios.service';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent  {

  constructor(private usuarioService: UsuariosService) { }

  salida() : void {
    console.log("estamos saliendo del sistema .. ");
    //this.usuarioService.logout();
  }
}
