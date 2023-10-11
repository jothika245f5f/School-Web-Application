import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ResultComponent } from './result/result.component';



const routes: Routes = [
{path:'',
component:ResultComponent,
children:[{path:'result',
component:ResultComponent}],
},
{path:'',
component:DetailsComponent,
children:[{path:'detail',
component:DetailsComponent}],
},








];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultRoutingModule { }
