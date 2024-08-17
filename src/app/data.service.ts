import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getemployee(){
    return [
      {id:1,name:'john',mail:'j@gmail.com'},
      {id:2,name:'mark',mail:'m@gmail.com'},
      {id:3,name:'watson',mail:'w@gmail.com'},
      {id:4,name:'harry',mail:'h@gmail.com'},
    ]
  }
}
