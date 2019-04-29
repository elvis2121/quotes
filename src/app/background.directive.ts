import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';


@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.backgroundColor = "#83a2d3";
   }

}
