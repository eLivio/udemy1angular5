import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar:boolean = true): string {
    // if (activar)
    // {
    //   // let ast:string = "";
    //   // for (let i = 0; i < value.length; i++) {
    //   //     ast += "*";
    //   // }
    //   // return ast;
    //   return value.replace(/./g,"*");
    // } else
    // {
    //   return value;
    // }
    return activar ? value.replace(/./g,"*") : value;
  }

}
