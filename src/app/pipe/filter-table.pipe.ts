import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTable',
  pure: false
})
export class FilterTablePipe implements PipeTransform {
  transform(items: any[], filterText: string): any[] {
    if (!items || !filterText) {
      return items;
    }

    const text = filterText.toLowerCase();
    return items.filter(item =>
      Object.values(item).some(value =>
        value && value.toString().toLowerCase().includes(text)
      )
    );
  }
}