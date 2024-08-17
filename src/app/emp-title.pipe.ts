import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empTitle'
})
export class EmpTitlePipe implements PipeTransform {

  transform(name:string,gender:string) {
    if(gender=='M'){
        return 'Mr. '+name
    }
    else{
        return 'Mrs. '+name
    }
}

}
