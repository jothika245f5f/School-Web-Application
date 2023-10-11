import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashRoutingModule } from './dash/dash-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { DashComponent } from './dash/dash.component';




@NgModule({
  declarations: [
    DashComponent

  ],
  imports: [
 
    CommonModule,
    DashRoutingModule,MatToolbarModule
  ]
})
export class DashboardModule { }
