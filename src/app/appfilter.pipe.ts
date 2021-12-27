import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appfilter'
})
export class AppfilterPipe implements PipeTransform {

  transform(items: any[],searchText: any): any {
      if (!items) {
        return [];
      }
      if (!searchText) {
        return items;
      }
      searchText = searchText.toLocaleLowerCase();
  
      return items.filter(it => {
        return it.value.toString().toLocaleLowerCase().includes(searchText);
      });
    }

}
