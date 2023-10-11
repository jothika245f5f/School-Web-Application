import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commonheader',
  templateUrl: './commonheader.component.html',
  styleUrls: ['./commonheader.component.css'],
  
  
})
export class CommonheaderComponent implements OnInit {

  pageYPosition: any;
  responsiveMenuVisible: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  

}
