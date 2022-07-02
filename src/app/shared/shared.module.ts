import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AngularLineawesomeModule, LaIconLibrary } from 'angular-line-awesome';
import { lasHippo, lasHeart, labAngular } from 'angular-line-awesome/icons';


@NgModule({
  declarations: [
    MenuComponent,
    SidebarComponent,
  ],
  exports : [
    MenuComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AngularLineawesomeModule,
  ]
})
export class SharedModule {
  constructor(library: LaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons([lasHippo, lasHeart, labAngular]);
  }
}
