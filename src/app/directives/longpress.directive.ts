import { Directive, Output, HostListener, EventEmitter } from '@angular/core';

@Directive({
  selector: '[longpress]'
})
export class LongpressDirective {

  constructor() { }

  @Output()
  longpress = new EventEmitter();

  private _timeout: any;

  @HostListener('mousedown') onMouseDown( e ) {
      this._timeout = setTimeout(() => {
          this.longpress.emit( e );
      }, 500);
  }

  @HostListener('mouseup') onMouseUp() {
      clearTimeout(this._timeout);
  }

  @HostListener('mouseleave') onMouseLeave() {
      clearTimeout(this._timeout);
  }

}
