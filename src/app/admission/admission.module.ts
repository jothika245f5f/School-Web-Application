import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmiComponent } from './admi/admi.component';
import { AddRoutingModule } from './add-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonheaderComponent } from '../commonheader/commonheader.component';


@NgModule({
  declarations: [
    AdmiComponent,
    
  ],
  imports: [
    CommonModule,
    AddRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class AdmissionModule { }
