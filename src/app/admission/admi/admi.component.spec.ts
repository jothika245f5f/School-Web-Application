import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CommenserService } from 'src/app/commenser.service';
import { StuDetails } from 'src/app/stu-details';

import { AdmiComponent } from './admi.component';

describe('AdmiComponent', () => {
  let component: AdmiComponent;
  let fixture: ComponentFixture<AdmiComponent>;
  let service: CommenserService;
  let httpTestingController:HttpTestingController

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmiComponent ],
      imports:[FormsModule,ReactiveFormsModule,AppRoutingModule,HttpClientModule,HttpClientTestingModule],
      providers:[CommenserService]
      
    })
   

    .compileComponents();

    fixture = TestBed.createComponent(AdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpTestingController=TestBed.inject(HttpTestingController);
    service=TestBed.inject(CommenserService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test a form group element count',()=>{
    const formElement= fixture.debugElement.nativeElement.querySelector('#admi');
    const inputElements=formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(4);
  })

  it('check initial value for form group',()=>{
    const loginFormGrp=component.admi;
    const loginFormValue={
      name:'',
      age:'',
      address:'',
      phoneNum:''
    }
    expect(loginFormGrp.value).toEqual(loginFormValue);
  })

  it('check username',()=>{
    const lofinFormUserEle=fixture.debugElement.nativeElement.querySelector('#admi').querySelectorAll('input')[0];
    const userNameValue=component.admi.get('name');
    expect(lofinFormUserEle.value).toEqual(userNameValue.value);
   
  })
  it('return observable should match thr right data',()=>{
    const details={
      name:'xxx'
    }
   
        service.postingData({id: 4}).subscribe((data:any)=>{
          expect(data.name).toEqual('xxx');
        });
        const req=httpTestingController.expectOne('http://localhost:3000/stuDetails');
        expect(req.request.method).toEqual('POST');
        req.flush(details);
        
  })
  it("get student data ",()=>{
    const details=
      {
        name:'xxx',
        age:'21',
        phoneNum:'77789',
        address:'yyyy'
      }
  
    service.gettingData().subscribe((data:any)=>{
      expect(data.name).toEqual('xxx');
      expect(data.age).toEqual('21');
      expect(data.phoneNum).toEqual('77789');
      expect(data.address).toEqual('yyyy');


    });
    const req=httpTestingController.expectOne('http://localhost:3000/stuDetails');
    req.flush(details);
  })
  
});
