import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * Todas las páginas se prerenderizan a HTML estático en el build. Así su
 * contenido y su <title> se leen sin ejecutar JavaScript (lo requieren las
 * herramientas de revisión de Meta y ayuda al SEO).
 */
export const serverRoutes: ServerRoute[] = [{ path: '**', renderMode: RenderMode.Prerender }];
