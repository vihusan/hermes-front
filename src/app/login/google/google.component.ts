import { Component, ViewChild, ElementRef} from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
})
export class GoogleComponent {
  constructor(private loginService:LoginService){}


handleCredentialResponse(response:any) {
  console.log("id_token", response); 
  //this.loginService.loginGoogle(response.credential);
}

}
