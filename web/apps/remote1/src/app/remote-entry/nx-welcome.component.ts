import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'web-nx-welcome',
  standalone: true,
  imports: [],
  template: `
    <div>Hello from REMOTE1:4201</div>
    <img src='assets/remote1/sample.png' />
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
