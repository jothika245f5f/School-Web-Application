import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result/result.component';
import { ResultRoutingModule } from './result-routing.modules';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    ResultComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ResultRoutingModule
  ]
})
export class ResultsModule { }
