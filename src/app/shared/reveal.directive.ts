import { Directive, ElementRef, afterNextRender, inject, input, DestroyRef } from '@angular/core';

/**
 * Hace aparecer el elemento (fade + slide) la primera vez que entra al viewport.
 * Respeta `prefers-reduced-motion` (los estilos de `.reveal` se desactivan en CSS).
 *
 * Uso: `<div appReveal [revealDelay]="120">`
 */
@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal',
    '[style.--reveal-delay]': 'revealDelay() + "ms"',
  },
})
export class RevealDirective {
  readonly revealDelay = input(0);

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const node = this.el.nativeElement;
      if (!('IntersectionObserver' in window)) {
        node.classList.add('is-visible');
        return;
      }
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              node.classList.add('is-visible');
              observer.disconnect();
            }
          }
        },
        { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
      );
      observer.observe(node);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
