import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmiComponent } from './admi/admi.component';



const routes: Routes = [
{path:'',
component:AdmiComponent,
children:[{path:'admission',
component:AdmiComponent}],
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddRoutingModule { }
