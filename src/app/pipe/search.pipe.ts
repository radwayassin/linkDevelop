import { PressData } from './../models/press-data';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(PressData:any , term:any)
   {
      return PressData.filter(function(PressData){
          return PressData.title.toLowerCase().includes(term.toLowerCase());
      })
  }

}
