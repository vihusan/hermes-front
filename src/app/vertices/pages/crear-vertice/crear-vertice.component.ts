import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { GetTipoVerticesResponses } from '../../interfaces/vertices.interface';
import { UsuariosService } from '../../../usuarios/services/usuarios.service';


@Component({
  selector: 'app-crear-vertice',
  templateUrl: './crear-vertice.component.html',
  styleUrls: ['./crear-vertice.component.css']
})
export class CrearVerticeComponent implements OnInit {
  private _servicioUrl: string = "http://localhost:8080/hermes";
  listadoTipoVertices = null

  constructor (private http: HttpClient,
               private usuarioService : UsuariosService){}
  
  async ngOnInit(): Promise<void> {
    const resp = await this.tiposDeVertices();
    if (resp == true)
      console.log("ltv: ", this.listadoTipoVertices);
  }

  crearVerticeForm = new FormGroup({
    latitud: new FormControl(''),
    longitud: new FormControl(''),
    tipoVertice: new FormControl('')
  });

  crearVertice(): void{ 
    // this.crearVerticeForm.value.role = "USER_ROLE";
    // console.log(this.crearVerticeForm.value);
    // this.http.post<PostUsuariosResponses>(`${this._servicioUrl}/usuarios`, this.crearVerticeForm.value)
    // .subscribe( resp => {
    // console.log(resp);
    // this.usuariosService.loginCreateUser(resp.token);
    // });
  }

  tiposDeVertices() : Promise<Boolean> {
    return new Promise((resolve, reject) => {
      const param = new HttpHeaders()
            .append('xtoken', this.usuarioService.getToken());

        this.http.get<GetTipoVerticesResponses>(`${this._servicioUrl}/tipovertice`, {headers : param})
        .subscribe( resp => {   
            if(resp) {
               this.listadoTipoVertices = resp.tipovertices;
               resolve(true);
            }else {
              reject(false);
            }
        });
    });
  }

}
