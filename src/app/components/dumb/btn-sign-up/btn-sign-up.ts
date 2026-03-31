import { Component } from '@angular/core';

declare global {
  interface Window {
    ym?: (...args: any[]) => void;
  }
}

@Component({
  selector: 'app-btn-sign-up-dumb',
  imports: [],
  templateUrl: './btn-sign-up.html',
  styleUrl: './btn-sign-up.scss'
})
export class BtnSignUpDumb {
  openLink() {
    window.ym?.(99897562, 'reachGoal', 'signup_click');
    window.open('https://dikidi.net/601523?p=0.pi', '_blank', 'noopener,noreferrer');
  }
}
