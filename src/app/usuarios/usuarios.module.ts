import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { CrearUsuarioComponent } from './pages/crear-usuario/crear-usuario.component';
import { ActualizarUsuarioComponent } from './pages/actualizar-usuario/actualizar-usuario.component';
import { ListarUsuariosComponent } from './pages/listar-usuarios/listar-usuarios.component';



@NgModule({
  declarations: [
    InicioSesionComponent,
    CrearUsuarioComponent,
    ActualizarUsuarioComponent,
    ListarUsuariosComponent
  ],
  exports : [
    InicioSesionComponent,
    CrearUsuarioComponent,
    ActualizarUsuarioComponent,
    ListarUsuariosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsuariosModule { }
