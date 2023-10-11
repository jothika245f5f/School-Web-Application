import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegiterModule } from './regiter/regiter.module';
import { UpdateComponent } from './helps/update/update.component';




const routes: Routes = [

  {
    path:'', component:LoginComponent
  },
  {
    path:'update/:id',component:UpdateComponent
  },
  {path:'dashboard',
  loadChildren:()=>
  import('./dashboard/dashboard.module').then((m)=>m.DashboardModule)
},
{path:'admission',
loadChildren:()=>
import('./admission/admission.module').then((m)=>m.AdmissionModule)

},
{
  path:'result',
  loadChildren:()=>
  import('./results/results.module').then((m)=>m.ResultsModule),
},
{
  path:'result/detail',
  loadChildren:()=>
  import('./results/results.module').then((m)=>m.ResultsModule),
},


{path:'help',
loadChildren:()=>
import('./helps/helps.module').then((m)=>m.HelpsModule)
},
{
  path:'signin',
  loadChildren:()=>
  import('./regiter/regiter.module').then((m)=>m.RegiterModule)
},




{ path: '', redirectTo: '', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
