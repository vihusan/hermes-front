/** Librerias de Angular*/
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';


/**Componentes propios  */
import { LoginModule } from './login/login.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { SharedModule } from './shared/shared.module';
import { BuscarComponent } from './caminos/pages/buscar/buscar.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule,
    UsuariosModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
