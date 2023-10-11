import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { CommenserService } from '../commenser.service';


import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service:CommenserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[FormsModule,ReactiveFormsModule,AppRoutingModule,HttpClientModule],
      providers:[CommenserService]
      

    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service=TestBed.inject(CommenserService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test a form group element count',()=>{
    const formElement= fixture.debugElement.nativeElement.querySelector('#login');
    const inputElements=formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(2);
  })

  it('check initial value for form group',()=>{
    const loginFormGrp=component.login;
    const loginFormValue={
      name:'',
      age:'',
      
    }
    expect(loginFormGrp.value).toEqual(loginFormValue);
  })
  // it('check login data as registered',()=>{
  //   component.loginSubmit()
  // })
 
});
