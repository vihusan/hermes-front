import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { HermesUser} from '../../interfaces/usuarios.interface';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public nombre_usuario : string = "";
  public role_usuario : string = "";
  
  constructor(private usuarioService : UsuariosService) { }

  async ngOnInit(): Promise<void> {
    const usuarioPromise  = await this.usuarioService.obtenerPerfil();
    if (usuarioPromise == true) {
      const usuario : HermesUser = this.usuarioService.getUser();
      this.nombre_usuario = usuario.nombre;
      this.role_usuario = usuario.role;
    }
  }
}
