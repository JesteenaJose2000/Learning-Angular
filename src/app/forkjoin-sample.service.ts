import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ForkjoinSampleService {
  constructor() {}

  getnum1() {
    return new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(23);
        observer.complete();
      }, 2000);
    });
  }

  getnum2() {
    return new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(50);
        observer.complete();
      }, 5000);
    });
  }

  getnum3() {
    return new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(100);
        observer.complete();
      }, 1000);
    });
  }

  //after every observable is ready then only we get data

  getdata() {
    return forkJoin([this.getnum1(), this.getnum2(), this.getnum3()]);
  }
}
