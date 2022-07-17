/**
 * Autor: Víctor Hugo Sánchez Calderón
 * Fecha: 12 Jul 2022
 * Descripción: Servicio para intecambio de información entre componentes
 */

import { HttpClient, HttpHeaders} from '@angular/common/http';
import { GetLoginResponses, GetUsuariosResponses, HermesUser } from '../interfaces/usuarios.interface';
import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class UsuariosService {
    private _servicioUrl: string = "http://localhost:8080/hermes";
    private usuarioActual: HermesUser = {  
        nombre :  "",
        email  :  "",
        role   :  "",
        estado :  "",
        google :  "",
        uid    :  ""
    };



    constructor ( private http: HttpClient, 
                  private router: Router) {}

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
            if(resp.token) {
                this.setId(resp.data.uid);
                this.setToken(resp.token);
                this.router.navigateByUrl('/perfil(menulateral:perfil)');
            }
        });
    }

    /**
     * 
     * @param token 
     * Login al sistema, al crear un usuario
     */
    loginCreateUser(token : string) :void {
        this.setToken(token);
        this.router.navigateByUrl('/perfil');
        window.location.reload();
    }

    /**
     * Salida del sistema
     */
    logout() : void{
        console.log("Ahora si estamos saliendo ");
        localStorage.removeItem('htoken');
        localStorage.removeItem('hid')
        this.router.navigateByUrl('/buscarcamino(menulateral:buscarcamino)');
    }

    /**
     * Asigna token del localstorage
     */
    setToken(token : string) : void{
        localStorage.setItem('htoken', token);
    }


    /**
     * Obtine token del localstorage
     */
     getToken() : string{
        return localStorage.getItem('htoken');
    }

    /**
     * Asigna uid a localstorage
     */
    setId(id : string) : void{
        localStorage.setItem('hid', id);
    }

    /**
     * Obtine uid del localstorage
     */
     getId() : string{
        return localStorage.getItem('hid');
    }

    /**
     * Asigna uid a localstorage
     */
    setUser(usuarioActual : HermesUser) : void{
        this.usuarioActual = usuarioActual;
    }

    /**
     * Obtine uid del localstorage
     */
    getUser() : HermesUser{
        return this.usuarioActual;
    }

    /**
     * Obtener el usuario logeado para usar el sistema
     */
    obtenerPerfil() : Promise<Boolean>{
        return new Promise((resolve, reject) => {
            // const usuarioAux = {
            //     nombre :  "nombre_generico",
            //     email  :  "email_generico",
            //     role   :  "role_generico",
            //     estado :  "estado_generico",
            //     google :  "google_generico",
            //     uid    :  "uid_generico"
            // }
            
            // const usuarioAux = null;

            // setTimeout(()=>{
            //     if (usuarioAux) {
            //         this.setUser(usuarioAux);
            //         resolve(true);
            //     } else {
            //         reject({
            //             msg: "erees una mamada"
            //         });
            //     }
            // },  5000);

            const token:string = this.getToken();
            const id:string = this.getId();
    
            if(token){
                const headerParam = new HttpHeaders()
                .append('xtoken', token)
                .append('id', id);
    
                this.http.get<GetUsuariosResponses>(`${this._servicioUrl}/usuarios`, {headers : headerParam})
                .subscribe( resp => {
                    if(resp.usuario) {
                        this.setUser(resp.usuario);
                        this.router.navigateByUrl('perfil(menulateral:perfil)');
                        resolve(true);
                    }
                });
            }else{
                reject(false);
            }
        });
    }

}