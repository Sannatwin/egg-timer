// egg-progress-bar.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'egg-progress-bar',
  standalone: true,
  templateUrl: './egg-progress-bar.component.html',
  styleUrls: ['./egg-progress-bar.component.css']
})
export class EggProgressBarComponent {
  @Input() progress: number = 0; // valore da 0 a 1
}
