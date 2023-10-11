import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './help/help.component';
import { HelpRoutingModule } from './help-routing.modules';
import { AppMaterialModule } from '../app.material-module';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    HelpComponent,
    
    
  ],
  imports: [
    CommonModule,
    HelpRoutingModule,AppMaterialModule
  ]
})
export class HelpsModule { }
