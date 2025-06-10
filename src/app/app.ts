import { Component } from '@angular/core';
import { TimerComponent } from './timer/timer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TimerComponent],
  template: `<app-timer></app-timer>`
})
export class AppComponent {}
