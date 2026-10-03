import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor() {
    // Compensa la altura de la barra de navegación fija al saltar a una sección.
    inject(ViewportScroller).setOffset([0, 80]);
  }

  /** El <base href="/"> rompe los enlaces "#id" puros; movemos el foco a mano. */
  protected skipToContent(event: Event): void {
    event.preventDefault();
    const main = document.getElementById('contenido');
    main?.focus({ preventScroll: true });
    main?.scrollIntoView();
  }
}
