import { PressReleasesService } from './../../Service/press-releases.service';
import { HttpClient } from '@angular/common/http';
import { PressData } from './../../models/press-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-press-releases',
  templateUrl: './press-releases.component.html',
  styleUrls: ['./press-releases.component.scss'],
})
export class PressReleasesComponent implements OnInit {
  PressData: PressData[];
  PressHomeON:Array<any> =[];
  constructor(
    private _http: HttpClient,
    private _PressReleasesService: PressReleasesService
  ) { }

  ngOnInit() {
    this._PressReleasesService.getPressData().subscribe((articles) => {
      this.PressData = articles;
      for (let i = 0; i < this.PressData.length; i++) {
        if (this.PressData[i].showOnHomepage == true) {
          this.PressHomeON.push(this.PressData[i])
        }
      };
    });
  }
}
