import { SearchPipe } from './../pipe/search.pipe';
import { HttpClient } from '@angular/common/http';
import { PressReleasesService } from './../Service/press-releases.service';
import { PressData } from './../models/press-data';
import { Component, OnInit } from '@angular/core';
import 'jquery';
import { ActivatedRoute, Params } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-press-filter-page',
  templateUrl: './press-filter-page.component.html',
  styleUrls: ['./press-filter-page.component.scss']
})
export class PressFilterPageComponent implements OnInit {
  PressFilter: PressData[] = [];
  Categories: PressData[] = [];
  FilterData: PressData[] = [];
  x: number;
  counter: number;
  show = 8;
  category: string;
  constructor(
    private route: ActivatedRoute,
    private _http: HttpClient,
    private _PressReleasesService: PressReleasesService,
  ) { }

  valueSelected(id: number): void {
    this.FilterData = (id) ?
      this.PressFilter.filter(articles => articles.sourceID === id) :
      this.PressFilter;
  }
  search(term :string){
    this.FilterData = (term) ?
    this.PressFilter.filter(articles => articles.title.toLowerCase().includes(term.toLowerCase())) :
    this.PressFilter;
  }
  getDetails(p:any){
    localStorage.setItem('myDataStorage', JSON.stringify(p));
  }
  ngOnInit() {
    this._PressReleasesService.getPressData().subscribe((articles) => {
      this.PressFilter = articles;
      localStorage.setItem('sourceID', articles.sourceID);
      this.route.params.forEach((params: Params) => {
        let id = +params['id'];
        this.valueSelected(id);
      });
    });
    this._PressReleasesService.getCategory().subscribe((sourceCategory) => {
      this.Categories = sourceCategory;
    });
  }
}
