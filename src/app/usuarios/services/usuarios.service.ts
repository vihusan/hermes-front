import { HttpClient, HttpHeaders} from '@angular/common/http';
import { GetLoginResponses } from '../interfaces/usuarios.interface';
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

    login(loginForm: FormGroup) : void{
        const paramLogin = new HttpHeaders()
            .append('email', loginForm.value.email)
            .append('password', loginForm.value.password);

        this.http.get<GetLoginResponses>(`${this._servicioUrl}/auth/login`, {headers : paramLogin})
        .subscribe( resp => {
            this.setToken(resp.token);
            this.sharedServices.cambioMenu();
            this.router.navigateByUrl('/buscarcamino');
        });
    }

    logout() : void{
        localStorage.removeItem('htoken');
    }

    setToken(token : String) : void{
        localStorage.setItem('htoken', JSON.stringify(token));
    }

    getToken() : String{
        return localStorage.getItem('htoken');
    }
}