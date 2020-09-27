import { SearchPipe } from './../pipe/search.pipe';
import { HttpClient } from '@angular/common/http';
import { PressReleasesService } from './../Service/press-releases.service';
import { PressData } from './../models/press-data';
import { Component, OnInit } from '@angular/core';

import 'jquery';
declare var $: any;
@Component({
  selector: 'app-press-filter-page',
  templateUrl: './press-filter-page.component.html',
  styleUrls: ['./press-filter-page.component.scss']
})
export class PressFilterPageComponent implements OnInit {
  PressFilter: PressData[];
  Categories: PressData[];
  x:number;
  constructor(
    private _http: HttpClient,
    private _PressReleasesService: PressReleasesService,
  ) { }
  valueSelected(id){
   
  }
  loadMore(){
    this._PressReleasesService.getPressData().subscribe((articles) => {
      this.PressFilter = articles.slice(0,16);
    });
  }
  ngOnInit() {
    this._PressReleasesService.getPressData().subscribe((articles) => {
      this.PressFilter = articles.slice(0, 8);
    });
    this.loadMore();
    this._PressReleasesService.getCategory().subscribe((sourceCategory) => { this.Categories = sourceCategory; });
  }
}
