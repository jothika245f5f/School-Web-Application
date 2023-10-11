import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommenserService } from '../commenser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: any = FormGroup;
  addata: any;
  header_check: boolean = true;
  loginSubmitMsg: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private comser: CommenserService
  ) {
    this.comser.header_Check = false;
  }

  ngOnInit(): void {
    this.login = this.fb.group({
      name: ['', Validators.required],
      // email:['',Validators.compose([Validators.required,Validators.email])]
      password: ['', Validators.required],
    });
    this.comser.gettingSignData().subscribe((data: any) => {
      this.addata = data;
    });
  }
  loginSubmit(data: any) {
    this.addata.forEach((item: any) => {
      if (item.name == data.name && item.password == data.password) {
        this.comser.setName(data.name);
        this.loginSubmitMsg = true;
        localStorage.setItem('isLoggedIn', 'true');
        setTimeout(() => {
          this.comser.onChangeHeader();
          this.router.navigate(['dashboard']);
        }, 2000);

        console.log(data);
      }
    });
  }

  get name() {
    return this.login.get('name');
  }
  get password() {
    return this.login.get('password');
  }

  forAdmission() {
    this.router.navigate(['admission']);
  }

  signIn() {
    this.router.navigate(['signin']);
  }
}
