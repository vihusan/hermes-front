/**
 * Autor: Víctor Hugo Sánchez Calderón
 * Fecha: 12 Jul 2022
 * Descripción: Servicio para intecambio de información entre componentes
 */

import { HttpClient, HttpHeaders} from '@angular/common/http';
import { GetLoginResponses, PostUsuariosResponses } from '../interfaces/usuarios.interface';
import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenuComponent } from '../../shared/menu/menu.component';
import { InicioSesionComponent } from '../pages/inicio-sesion/inicio-sesion.component';
import { SharedServices } from '../../shared/services/shared.services';

@Injectable({
    providedIn: 'root'
})
export class UsuariosService {
    private _servicioUrl: string = "http://localhost:8080/hermes";
    
    constructor ( private http: HttpClient, 
        private router: Router,
        private sharedServices: SharedServices) {}

    /**
     * 
     * @param loginForm - formulario de donde se optiene la informacion 
     * Login al sistema
     */
    login(loginForm: FormGroup) : void{
        const paramLogin = new HttpHeaders()
            .append('email', loginForm.value.email)
            .append('password', loginForm.value.password);

        this.http.get<GetLoginResponses>(`${this._servicioUrl}/auth/login`, {headers : paramLogin})
        .subscribe( resp => {
            this.setToken(resp.token);
            this.router.navigateByUrl('/perfil');
        });
    }

    /**
     * 
     * @param token para iniciar sesion
     * Login al sistema, al crear un usuario
     */
    loginCreateUser(token : String) :void {
        this.setToken(token);
        this.router.navigateByUrl('/perfil');
        window.location.reload();
    }

    /**
     * Salida del sistema
     */
    logout() : void{
        localStorage.removeItem('htoken');
        this.router.navigateByUrl('/buscarcamino');
        //window.location.reload();
    }

    /**
     * Asigna token del localstorage
     */
    setToken(token : String) : void{
        localStorage.setItem('htoken', JSON.stringify(token));
    }

    /**
     * Obbtine token del localstorage
     */
    getToken() : String{
        return localStorage.getItem('htoken');
    }
}