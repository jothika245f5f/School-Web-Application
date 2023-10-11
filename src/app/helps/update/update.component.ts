import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommenserService } from 'src/app/commenser.service';
import { StudentDetails } from 'src/app/stu-details';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit, AfterViewInit {
  update: FormGroup;
  constructor(
    private commonservice: CommenserService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    commonservice.onChangeHeader();
  }
  ngAfterViewInit(): void {
    this.commonservice.gettingData().subscribe((data: any) => {});
  }
  val: any;
  student: any;
  currentData: StudentDetails;
  ngOnInit(): void {
    this.update = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      sex: ['', Validators.required],
      nationality: ['', Validators.required],
      address: ['', Validators.required],
    });
    let sub = this.route.params.subscribe((params) => {
      this.val = params['id'];
      console.log(this.val, 'param id');
    });
    this.commonservice.getUpdateData(this.val).subscribe((data) => {
      this.currentData = data;
      this.update.setValue({
        name: this.currentData.name,
        age: this.currentData.age,
        sex: this.currentData.sex,
        nationality: this.currentData.nationality,
        address: this.currentData.address,
      });
    });
  }

  submit(data: any) {
    this.commonservice.updateData(this.val, data).subscribe((datas) => {
      console.log('updated sucessfully');
      this.ngAfterViewInit();
    });
    this.router.navigate(['/help']);
  }
}
