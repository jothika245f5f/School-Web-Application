import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommenserService } from 'src/app/commenser.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  id:number=1;
  signin:any= FormGroup;
  header_check:boolean=true;
  signSubmitMsg:boolean=false;
  constructor(private fb:FormBuilder,private router:Router, private comser:CommenserService){
    this.comser.header_Check=false;

}  ngOnInit(): void {

  this.signin=this.fb.group({
    name:['',Validators.required],
    password:['',Validators.required]
  });
  }

  get name(){ return this.signin.get('name'); }
  get password(){ return this.signin.get('password'); }

  signIn(data:any){
    console.log(data)
    let DataToPass={
      name:data.name,
      password:data.password,
      
    }
      this.comser.postSignData(DataToPass).subscribe((data)=>{
        this.signSubmitMsg = true;
        setTimeout(() => {
          if(data){
          
            this.signin.reset();
            
          }
        }, 2000);
       
      })
      
  }

  login(){
    this.router.navigate(['']);
  }
}
