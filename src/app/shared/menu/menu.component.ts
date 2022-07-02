import { AfterContentInit, AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { UsuariosService } from 'src/app/usuarios/services/usuarios.service';
import { SharedServices } from '../services/shared.services';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterContentInit{
  @ViewChild('menu_admin', { static: true}) menuAdmin : TemplateRef<any>;
  @ViewChild('menu', { static: true}) menu : TemplateRef<any>;
  @ViewChild('menu_view', { static: true, read: ViewContainerRef}) menuView : ViewContainerRef;

  constructor(private usuariosService : UsuariosService,
              private sharedService :  SharedServices) { }

  ngAfterContentInit(){
    console.log('ViewChild en component: ', this.menuAdmin);
    this.sharedService.setMenuView(this.menuView);
    this.sharedService.setMenu(this.menu);
    this.sharedService.setMenuAdmin(this.menuAdmin);

    this.sharedService.cambioMenu();
  }

  logout(): void {
    this.usuariosService.logout();
    this.sharedService.cambioMenu();
  }
}
