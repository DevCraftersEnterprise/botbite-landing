import { Location, ViewportScroller } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Navegación a secciones de la landing (`/home#seccion`).
 * Los enlaces usan `routerLink="/home" [fragment]="id"` (URLs reales, accesibles y
 * compartibles); si ya estamos en /home se hace scroll directo para que también
 * funcione al volver a pulsar el mismo enlace.
 */
@Injectable({ providedIn: 'root' })
export class SectionNavService {
  private readonly router = inject(Router);
  private readonly scroller = inject(ViewportScroller);
  private readonly location = inject(Location);

  go(event: Event, id: string): void {
    const path = this.router.url.split(/[?#]/)[0];
    if (path !== '/home') return; // deja que routerLink navegue y haga anchor scrolling

    event.preventDefault();
    this.scroller.scrollToAnchor(id);
    this.location.replaceState('/home#' + id);
  }
}
