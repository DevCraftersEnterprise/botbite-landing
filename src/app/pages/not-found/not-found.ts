import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Página para las URL que no existen. Netlify la sirve con estado 404
 * (public/_redirects) y no se indexa (`noindex` en su ruta).
 */
@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <article class="container-page pt-28 pb-20 sm:pt-36">
      <div class="mx-auto max-w-xl text-center">
        <p class="eyebrow mb-5">Error 404</p>
        <h1 class="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          No encontramos esta página
        </h1>
        <p class="mb-8 text-neutral-600">
          Puede que la dirección esté mal escrita o que la página ya no exista.
        </p>
        <a routerLink="/" class="btn-primary !px-6 !py-3.5 !text-[15px]">Ir al inicio</a>
      </div>
    </article>
  `,
})
export default class NotFound {}
