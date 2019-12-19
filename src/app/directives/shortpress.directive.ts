import { Directive, Output, HostListener, EventEmitter } from '@angular/core';

@Directive({
  selector: '[shortpress]'
})
export class ShortpressDirective {

  constructor(){}

  @Output()
  shortpress = new EventEmitter();

  private _timeout: any;
  private _isShort: boolean;

  @HostListener('mousedown') onMouseDown( e ) {
      this._isShort = true;
      this._timeout = setTimeout(() => {
          this._isShort = false;
      }, 500);
  }

  @HostListener('mouseup') onMouseUp( e ) {
      if (this._isShort) {
          this.shortpress.emit( e );
      }
      clearTimeout(this._timeout);
  }

  @HostListener('mouseleave') onMouseLeave() {
      clearTimeout(this._timeout);
  }
}
