import { Component, OnInit } from '@angular/core';
import { max, min, Subscription } from 'rxjs';
import { CommenserService } from 'src/app/commenser.service';
import { StudentDetails } from 'src/app/stu-details';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  random: any = [];
  total: number = 0;
  StuDetail: StudentDetails[] = [];
  name: any;
  result: any;
  private subscription: Subscription = new Subscription();

  constructor(private commonservice: CommenserService) {
    commonservice.onChangeHeader();
  }
  ngOnInit(): void {
    this.name = this.commonservice.getName();
    this.randomNumber(10, 100);
  }
  
  randomNumber(min: number, max: number) {
    for (let i = 0; i < 5; i++) {
      this.random[i] = Math.floor(Math.random() * (max - min) + min);
      this.total += this.random[i];
      if (this.total <= 200) {
        this.result = 'Fail';
      } else {
        this.result = 'Pass';
      }
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
