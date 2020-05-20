import { Pipe, PipeTransform } from '@angular/core';


//converts K to F temperature
@Pipe({
  name: 'tempConversion'
})
export class TempConversionPipe implements PipeTransform {

  transform(value: number): number {
    return Math.round((value - 273.15) * (9/5) + 32);
  }

}
