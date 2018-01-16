import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'LockFilter'
})

export class SearchPipe implements PipeTransform {
    transform(value: any, args?: any): any {

        if(!value)return null;
        if(!args)return value;

        args = args.toLowerCase();

        return value.filter(function(item){
             console.log(item)
             console.log(value);
            console.log(args);
            return item.fullname.toLowerCase().includes(args);
             
            
        });
    }
}