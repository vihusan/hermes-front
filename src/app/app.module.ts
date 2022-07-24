/** Librerias de Angular*/
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';


/**Biblioteca de terceros */
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


/**Componentes propios  */
import { LoginModule } from './login/login.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { SharedModule } from './shared/shared.module';
import { BuscarComponent } from './caminos/pages/buscar/buscar.component';
import { HomeVerticeComponent } from './vertices/pages/home-vertice/home-vertice.component';
import { VerticesModule } from './vertices/vertices.module';


@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
    HomeVerticeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule,
    UsuariosModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    SweetAlert2Module,
    SweetAlert2Module.forChild({ /* options */ }),
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
