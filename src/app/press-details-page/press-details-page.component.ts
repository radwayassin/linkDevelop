import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-press-details-page',
  templateUrl: './press-details-page.component.html',
  styleUrls: ['./press-details-page.component.scss']
})
export class PressDetailsPageComponent implements OnInit {
  constructor() { }
  myData = localStorage.getItem('myDataStorage');
  details = JSON.parse(this.myData);
  ngOnInit(): void {
  }
}
