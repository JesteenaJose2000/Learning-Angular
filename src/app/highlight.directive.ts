import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input() propertyFormControl: FormControl | undefined;
  @Input() divisibleByNum = 5;

  constructor(private elemRef: ElementRef) {}

  ngOnInit() {
    this.propertyFormControl?.valueChanges.subscribe((data) => {
      console.log(data);
      this.elemRef.nativeElement.style.color =
        this.propertyFormControl?.value % 5 === 0 ? 'red' : 'green';
    });
  }
}
