import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeConverter',
  standalone: true
})
export class TimeConverterPipe implements PipeTransform {

  transform(value: any): any {
    if(value == null) return null;
    return value * 24 * 60 * 60;
  }

}