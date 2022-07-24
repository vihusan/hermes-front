import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './pages/listado/listado.component';
import { CrearVerticeComponent } from './pages/crear-vertice/crear-vertice.component';
import { HomeVerticeComponent } from './pages/home-vertice/home-vertice.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ListadoComponent,
    CrearVerticeComponent,
  ],
  exports : [
    ListadoComponent,
    CrearVerticeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})

export class VerticesModule { }
