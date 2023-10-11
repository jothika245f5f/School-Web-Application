import { Component, OnInit } from '@angular/core';
import { CommenserService } from 'src/app/commenser.service';


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  ImagePath: string;

  constructor(private comser:CommenserService) { 
    this.ImagePath = '/assets/download.jpg'
    comser.onChangeHeader();

  }

  ngOnInit(): void {
  }

}

