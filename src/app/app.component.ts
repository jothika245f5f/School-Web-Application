import { Component, OnInit } from '@angular/core';
import { CommenserService } from './commenser.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(4000, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate(4000, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent {
  constructor(public comser:CommenserService){
    comser.onChangeHeader();
  }
  showEvents = true;
  events = {
    img:[
    
    ]
    
  }
 
  title = 'scl-web';
}
