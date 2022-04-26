import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LoginService{
    private _urlServicio = "http://localhost:8080/hermes";    
    constructor(private http: HttpClient) {}

    loginGoogle(token_id:string) {
      const headers = new HttpHeaders({
        token_id
      });

      console.log("hola");
      this.http.post<String>(`${this._urlServicio}/auth/login_google`, { headers })
        .subscribe( resp => {
          console.log('nombre enviado');
        });
    }
}