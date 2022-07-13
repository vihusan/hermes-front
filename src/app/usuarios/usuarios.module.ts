import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { ActualizarUsuarioComponent } from './pages/actualizar-usuario/actualizar-usuario.component';
import { ListarUsuariosComponent } from './pages/listar-usuarios/listar-usuarios.component';
import { CrearUsuarioComponent } from './pages/crear-usuario/crear-usuario.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

@NgModule({
  declarations: [
    InicioSesionComponent,
    ActualizarUsuarioComponent,
    ListarUsuariosComponent,
    CrearUsuarioComponent,
    PerfilComponent,
  ],
  exports : [
    InicioSesionComponent,
    ActualizarUsuarioComponent,
    ListarUsuariosComponent,
    CrearUsuarioComponent,
    PerfilComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class UsuariosModule { }
