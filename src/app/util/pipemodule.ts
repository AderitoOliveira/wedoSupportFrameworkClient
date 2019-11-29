import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {
    transform(array: any[], value: string) {
        if(value) {
            return array ? array.filter(item => 
                //item.NAME.toUpperCase().search(value.toUpperCase()) > -1) : [];
                Object.keys(item).some(k => item[k].toLowerCase().includes(value.toLowerCase()))) : [];
        }

        return array;
    }
}
