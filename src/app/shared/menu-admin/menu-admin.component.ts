import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/usuarios/services/usuarios.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent  {

  constructor(private usuarioService: UsuariosService) { }

  salida() : void {
    Swal.fire({
      title: '¿Deseas salir de Hermes?',
      confirmButtonText: 'SI',
      showDenyButton: true,
      denyButtonText: `NO`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.usuarioService.logout();
      } else if (result.isDenied) {
        Swal.fire('Sigamos trabajando !', '', 'info')
      }
    })
  }

  saveFile($event): void {
    console.log("Guardando archivo");
  }

  handleDismiss($event) :void {
    console.log("Mensaje de despedia!");
    
  }
  handleDenial() : void {
    console.log("Se nego y redirecciona");
  }
}
