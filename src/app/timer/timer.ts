// src/app/timer/timer.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { EggProgressBarComponent } from '../egg-progress-bar/egg-progress-bar.component';

//
// Helper message(): usa la dialog API di Tauri in prod, altrimenti alert()
// 
declare global {
  interface Window {
    __TAURI__?: {
      dialog: {
        message: (msg: string, options?: { title?: string }) => Promise<void>;
      };
    };
  }
}

const message: (
  msg: string,
  options?: { title?: string }
) => Promise<void> =
  window.__TAURI__?.dialog?.message ??
  ((msg, options) => {
    const text = options?.title ? `${options.title}\n${msg}` : msg;
    alert(text);
    return Promise.resolve();
  });

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule, FormsModule, EggProgressBarComponent],
  templateUrl: './timer.html',
  styleUrls: ['./timer.css']
})
export class TimerComponent {
  cookingTimes: Record<string, number> = {
    'Soft-boiled (5 min)': 5 * 60,
    'Medium-boiled (7 min)': 7 * 60,
    'Hard-boiled (10 min)': 10 * 60
  };
  choices = Object.keys(this.cookingTimes);

  selected = this.choices[0];
  customMinutes: number | null = null;

  remaining = 0;
  displayTime = '00:00';
  timerSub: Subscription | null = null;
  isRunning = false;

  /** Durata totale in secondi, usata dalla progress bar */
  get totalSeconds(): number {
    return this.selected === 'Custom'
      ? (this.customMinutes ?? 0) * 60
      : this.cookingTimes[this.selected];
  }

  onModeChange() {
    if (this.selected !== 'Custom') {
      this.customMinutes = null;
    }
  }

  startTimer() {
    if (this.selected === 'Custom') {
      if (!this.customMinutes || this.customMinutes < 1) {
        message('Inserisci un tempo valido (minimo 1 minuto).', { title: 'Errore' });
        return;
      }
      if (this.customMinutes < 5 || this.customMinutes > 10) {
        message('Tempo consigliato 5–10 minuti, ma procedo.', { title: 'Attenzione' });
      }
      this.remaining = this.customMinutes * 60;
    } else {
      this.remaining = this.cookingTimes[this.selected];
    }

    this.isRunning = true;
    this.timerSub = interval(1000).subscribe(() => {
      if (this.remaining > 0) {
        this.remaining--;
        const m = Math.floor(this.remaining / 60);
        const s = this.remaining % 60;
        this.displayTime = `${m.toString().padStart(2, '0')}:${s
          .toString()
          .padStart(2, '0')}`;
      } else {
        this.stopTimer();
        this.notifyDone();
      }
    });
  }

  stopTimer() {
    this.isRunning = false;
    this.displayTime = '00:00';
    this.timerSub?.unsubscribe();
    this.timerSub = null;
  }

  async notifyDone() {
    await message('Timer completato! 🥚', { title: 'Egg Timer' });
  }
}

