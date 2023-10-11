import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from './dashboard/dashboard.module';
import { AdmissionModule } from './admission/admission.module';
import { HelpsModule } from './helps/helps.module';
import { ResultsModule } from './results/results.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import{HttpClientModule} from '@angular/common/http';
import { AppMaterialModule } from './app.material-module';
import { CommonheaderComponent } from './commonheader/commonheader.component';
import { UpdateComponent } from './helps/update/update.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UpdateComponent,
  CommonheaderComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,DashboardModule,
    AdmissionModule,HelpsModule,ResultsModule,MatToolbarModule,
     BrowserAnimationsModule,HttpClientModule,AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
