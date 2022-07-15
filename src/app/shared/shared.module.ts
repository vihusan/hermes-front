import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
@NgModule({
  declarations: [
    MenuComponent,
    SidebarComponent,
    SidebarMenuComponent,
    MenuAdminComponent
  ],
  exports : [
    MenuComponent,
    SidebarComponent,
    SidebarMenuComponent,
    MenuAdminComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class SharedModule {

}
