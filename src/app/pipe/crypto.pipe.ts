import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'crypto',
})
export class CryptoPipe implements PipeTransform {
  transform(value: string | number | boolean): string {
    console.log('pipe');
    if (value && typeof value !== 'string') {
      return value.toString();
    }

    return value + 'Máté';
  }
}
