import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-attribute',
  templateUrl: './custom-attribute.component.html',
  styleUrls: ['./custom-attribute.component.css'],
})
export class CustomAttributeComponent implements OnInit {
  number = new FormControl(0, Validators.required);

  constructor() {}

  ngOnInit(): void {}

  onBtnClick(number: any) {
    // this.number = number;
  }
}
