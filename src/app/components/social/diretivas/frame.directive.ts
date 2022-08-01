import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[spaFrame]'
})
export class FrameDirective {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }

}
