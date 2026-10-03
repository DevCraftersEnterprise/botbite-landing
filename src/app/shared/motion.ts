import { DestroyRef, ElementRef, afterNextRender, inject } from '@angular/core';

export function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/**
 * Llama a `onChange(true|false)` cuando el host entra o sale del viewport.
 * Sirve para pausar animaciones en bucle que no se están viendo.
 * Debe llamarse dentro de un contexto de inyección (constructor).
 */
export function onHostVisibility(onChange: (visible: boolean) => void): void {
  const el = inject<ElementRef<HTMLElement>>(ElementRef);
  const destroyRef = inject(DestroyRef);

  afterNextRender(() => {
    if (!('IntersectionObserver' in window)) {
      onChange(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => onChange(entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(el.nativeElement);
    destroyRef.onDestroy(() => observer.disconnect());
  });
}
