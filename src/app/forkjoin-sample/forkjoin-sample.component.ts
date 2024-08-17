import { Component, OnInit } from '@angular/core';
import { ForkjoinSampleService } from '../forkjoin-sample.service';

@Component({
  selector: 'app-forkjoin-sample',
  templateUrl: './forkjoin-sample.component.html',
  styleUrls: ['./forkjoin-sample.component.css'],
})
export class ForkjoinSampleComponent implements OnInit {
  number1: number = 0;
  number2: number = 0;
  number3: number = 0;

  constructor(private forkjoin: ForkjoinSampleService) {}

  ngOnInit(): void {
    this.forkjoin.getdata().subscribe((data) => {
      this.number1 = data[0];
      this.number2 = data[1];
      this.number3 = data[2];
    });
  }
}
