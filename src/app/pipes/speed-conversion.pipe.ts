import { Pipe, PipeTransform } from '@angular/core';

//converts the wind speed from meters per second to mph
@Pipe({
  name: 'speedConversion'
})
export class SpeedConversionPipe implements PipeTransform {

  transform(value: number): number {
    return Math.round(value * 2.237);
  }

}
