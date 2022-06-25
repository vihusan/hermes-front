import { Component } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent{
  busquedaForm = new FormGroup({
    verticeOrigen: new FormControl(''),
    verticeDestino: new FormControl('')
  });
  busqueda() : void{
    console.log("form -> ", JSON.stringify(this.busquedaForm.value));
  }
}
