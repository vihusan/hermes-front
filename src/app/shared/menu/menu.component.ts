import { AfterContentInit, AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { UsuariosService } from 'src/app/usuarios/services/usuarios.service';
import { SharedServices } from '../services/shared.services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterContentInit{
  _htoken : String;
  
  constructor(private usuariosService : UsuariosService) { }

  ngAfterContentInit(){
    this._htoken = this.usuariosService.getToken();
    console.log(this._htoken);
  }

  logout(): void {
    this.usuariosService.logout();
  }
}
