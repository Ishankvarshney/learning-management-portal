import { Directive } from '@angular/core';

@Directive({
  selector: '[appPreventDoubleClick]',
})
export class PreventDoubleClick {
  constructor() {}
}
