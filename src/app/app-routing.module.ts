import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './usuarios/pages/inicio-sesion/inicio-sesion.component';
import { CrearUsuarioComponent } from './usuarios/pages/crear-usuario/crear-usuario.component';
import { ActualizarUsuarioComponent } from './usuarios/pages/actualizar-usuario/actualizar-usuario.component';
import { ListarUsuariosComponent } from './usuarios/pages/listar-usuarios/listar-usuarios.component';

const routes: Routes = [
  {
    path: 'login',
    component: InicioSesionComponent,
  }, 
  {
    path: 'crearusuario',
    component: CrearUsuarioComponent,
  },
  {
    path: 'actualizarusuario',
    component : ActualizarUsuarioComponent,
  }, 
  {
    path: 'listarusuarios',
    component:  ListarUsuariosComponent
  }, 
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
