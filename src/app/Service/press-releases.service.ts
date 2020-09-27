import { PressData } from './../models/press-data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class PressReleasesService {
  constructor(private http: HttpClient) {}
  getPressData() {
    return this.http
      .get<PressData[]>('http://localhost:4200/assets/api/newsapi.json')
      .pipe(map((res: any) => res.articles));
  };
  getCategory(){
    return this.http
      .get<PressData[]>('http://localhost:4200/assets/api/newsapi.json')
      .pipe(map((res: any) => res.sourceCategory));
  }
}
