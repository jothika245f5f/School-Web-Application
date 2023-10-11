import { NgModule } from "@angular/core";

import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatInputModule} from '@angular/material/input'
import {  MatPaginatorModule } from "@angular/material/paginator";


@NgModule({
    exports:[
        MatTableModule,
        MatSortModule,
        MatProgressSpinnerModule,MatInputModule,MatPaginatorModule
    ]
})
export class AppMaterialModule{}