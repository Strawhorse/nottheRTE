import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'General', url: '/general', icon: 'globe' },
    { title: 'Economy/Business', url: '/business', icon: 'business' },
    { title: 'Sport', url: '/sport', icon: 'football' },
    { title: 'Entertainment/Celebrity', url: '/entertainment', icon: 'radio' },
    { title: 'Tech', url: '/technology', icon: 'phone-portrait' },
    { title: 'Health', url: '/health', icon: 'heart' },
    { title: 'Science', url: '/science', icon: 'telescope' },
  ];
  
  constructor() {}
}
