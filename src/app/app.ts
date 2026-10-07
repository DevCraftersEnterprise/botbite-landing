import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<router-outlet />',
})
export class App {
  constructor() {
    // Compensa la altura de la barra de navegación fija al saltar a una sección.
    inject(ViewportScroller).setOffset([0, 80]);
  }
}
