import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleComponent } from './google/google.component';



@NgModule({
  declarations: [
    GoogleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GoogleComponent
  ]
})
export class LoginModule { }
