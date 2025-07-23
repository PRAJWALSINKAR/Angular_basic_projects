import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter'
})
export class CurrencyConverterPipe implements PipeTransform {

  transform(value: number ,symbol : string = ''): string {
    return symbol + value.toFixed(3);
  }

}
