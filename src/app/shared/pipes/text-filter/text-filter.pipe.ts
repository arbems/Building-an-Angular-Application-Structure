import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFilter'
})
export class TextFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
