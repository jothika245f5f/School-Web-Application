import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { CommenserService } from 'src/app/commenser.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
details:any;
studetail:any;
db:any;
newArr:any;
  constructor(private comser:CommenserService) { }

  ngOnInit(): void {
    
    this.db=this.comser.getName();
    console.log(this.db);
     this.studetail=this.comser.gettingData().subscribe((data:any)=>{
  
       this.newArr=data.filter((el:any) =>{
        return el.name==this.db;
      });
       console.log(this.newArr);    
       })
      
    }
   
     
      

    

        

}
 