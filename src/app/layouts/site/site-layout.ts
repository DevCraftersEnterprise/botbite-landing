import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../../components/footer/footer';
import { Navbar } from '../../components/navbar/navbar';
import { skipToContent } from '../../shared/skip-to-content';

/** Marco del sitio del mesero virtual (inicio y páginas legales). */
@Component({
  selector: 'app-site-layout',
  imports: [RouterOutlet, Navbar, Footer],
  template: `
    <a
      href="#contenido"
      (click)="skip($event)"
      class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-neutral-950 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
    >
      Saltar al contenido
    </a>
    <app-navbar />
    <main id="contenido" tabindex="-1" class="outline-none">
      <router-outlet />
    </main>
    <app-footer />
  `,
})
export default class SiteLayout {
  protected readonly skip = skipToContent;
}
