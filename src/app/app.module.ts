import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { GoogleComponent } from './login/google/google.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { SharedModule } from './shared/shared.module';
import { BuscarComponent } from './caminos/pages/buscar/buscar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularLineawesomeModule, LaIconLibrary } from 'angular-line-awesome';
import { lasHippo, lasHeart, labAngular } from 'angular-line-awesome/icons';
import { CookieService } from 'ngx-cookie-service';
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
    AngularLineawesomeModule,
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: LaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons([lasHippo, lasHeart, labAngular]);
  }
}
