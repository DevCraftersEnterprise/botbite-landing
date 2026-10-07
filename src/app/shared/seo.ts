import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { SITE } from './site';

/** Metadatos de una página. Se declaran en `data.seo` de cada ruta. */
export interface PageSeo {
  description: string;
  /** Descripción para Open Graph/Twitter, si es distinta de `description`. */
  socialDescription?: string;
  /** Ruta canónica, por ejemplo `/agentes`. */
  path: string;
}

/**
 * Además del <title>, actualiza la descripción, el canonical y las etiquetas
 * Open Graph/Twitter de cada ruta. Al prerenderizar quedan escritos en el HTML
 * de cada página, así que los ven también los bots que no ejecutan JavaScript.
 */
@Injectable()
export class SeoTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);
    if (title) {
      this.title.setTitle(title);
      this.meta.updateTag({ property: 'og:title', content: title });
      this.meta.updateTag({ name: 'twitter:title', content: title });
    }

    let route = snapshot.root;
    while (route.firstChild) route = route.firstChild;
    const seo = route.data['seo'] as PageSeo | undefined;
    if (!seo) return;

    const url = SITE.baseUrl + seo.path;
    const socialDescription = seo.socialDescription ?? seo.description;
    this.meta.updateTag({ name: 'description', content: seo.description });
    this.meta.updateTag({ property: 'og:description', content: socialDescription });
    this.meta.updateTag({ name: 'twitter:description', content: socialDescription });
    this.meta.updateTag({ property: 'og:url', content: url });

    let canonical = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }
}
