import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommenserService } from 'src/app/commenser.service';

@Component({
  selector: 'app-admi',
  templateUrl: './admi.component.html',
  styleUrls: ['./admi.component.css'],
})
export class AdmiComponent implements OnInit {
  admi: any = FormGroup;
  counter = 0;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private commonservice: CommenserService
  ) {
    commonservice.onChangeHeader();
  }

  ngOnInit(): void {
    this.admi = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      sex: ['', Validators.required],
      nationality: ['', Validators.required],
      address: ['', Validators.required],
    });
  }
  submit(data: any) {
    let DataToPass = {
      name: data.name,
      age: data.age,
      sex: data.sex,
      nationality: data.nationality,
      address: data.address,
      phoneNum: data.phoneNum,
    };

    this.commonservice.postingData(DataToPass).subscribe((data: any) => {
      console.log("data posted sucessfully");
      this.admi.reset();
      this.commonservice.setName(data.name);
    });
    return this.counter++;
  }
}
