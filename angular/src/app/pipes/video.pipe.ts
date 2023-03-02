import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'Fvideo'
})
export class VideoPipe implements PipeTransform {

  transform(value: any,campo:string,args:string):any {
    if(!value)return null;
    if(!args)return value;
    return value.filter((singleItem:any) =>
       singleItem[campo].toLowerCase().includes(args.toLowerCase())
      );
  }
}
