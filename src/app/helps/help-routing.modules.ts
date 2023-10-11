import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { UpdateComponent } from './update/update.component';



const routes: Routes = [
{path:'',component:HelpComponent,
children:[{path:'help',
component:HelpComponent}
],
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRoutingModule { }
