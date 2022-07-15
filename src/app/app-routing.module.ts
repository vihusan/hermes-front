/** Bibliotecas angular */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** Componentes propios */
import { InicioSesionComponent } from './usuarios/pages/inicio-sesion/inicio-sesion.component';
import { CrearUsuarioComponent } from './usuarios/pages/crear-usuario/crear-usuario.component';
import { ActualizarUsuarioComponent } from './usuarios/pages/actualizar-usuario/actualizar-usuario.component';
import { ListarUsuariosComponent } from './usuarios/pages/listar-usuarios/listar-usuarios.component';
import { BuscarComponent } from './caminos/pages/buscar/buscar.component';
import { PerfilComponent } from './usuarios/pages/perfil/perfil.component';
import { MenuComponent } from './shared/menu/menu.component';
import { MenuAdminComponent } from './shared/menu-admin/menu-admin.component';

const routes: Routes = [
  {
    path: '',
    component: BuscarComponent,
  },
  {
    path : '',
    component: MenuComponent,
    outlet: 'menulateral'
  }, 
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
  {
    path : 'buscarcamino',
    component: BuscarComponent
  },
  {
    path:  'perfil',
    component:  PerfilComponent
  },
  {
    path : 'perfil',
    component: MenuAdminComponent,
    outlet: 'menulateral'
  }
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
