import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localDate',
  standalone: true,
})
export class LocalDatePipe implements PipeTransform {
  transform(value: string) {
    const splited = value.split('-');
    return `${splited[2]}/${splited[1]}/${splited[0]}`;
  }
}
