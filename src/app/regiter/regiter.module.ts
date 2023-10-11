import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegiterRoutingModule } from './regiter-routing.module';
import { SigninComponent } from './signin/signin.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    RegiterRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class RegiterModule { }
