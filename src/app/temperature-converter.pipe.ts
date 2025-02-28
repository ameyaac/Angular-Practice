import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConverter',
  standalone: true,
})
export class TemperatureConverterPipe implements PipeTransform {
  transform(
    value: any,
    formatType: string = 'c',
    symbol: string = 'C',
    decimalPlaces: string = '1.2-2'
  ): any {
    if (value == null) return null;

    switch (formatType) {
      case 'c':
      case 'C':
        return ((value - 32) * (5 / 9) + 'C');
      case 'f':
      case 'F':
        return (value * (9 / 5) + 32) + 'C';
    }
  }
}
