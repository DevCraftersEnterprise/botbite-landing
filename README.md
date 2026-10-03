# BotBite Landing

Sitio público de **BotBite** ([botbite.com.mx](https://botbite.com.mx)): presenta el mesero virtual por WhatsApp, cómo funciona, sus funciones, el panel de caja, la seguridad, los precios y las preguntas frecuentes. También incluye el aviso de privacidad y el aviso de datos.

**Stack:** Angular 20 (standalone, signals, zoneless) · Tailwind CSS 4 · lucide-angular. Sin SSR; el build genera un sitio estático.

## Puesta en marcha

```bash
npm install
npm start          # http://localhost:4200
npm run build      # dist/botbite-lander/browser
```

## Despliegue

Sitio estático: publica `dist/botbite-lander/browser`.

- **Build Command:** `npm ci && npm run build`.
- **Reescritura de rutas:** [public/_redirects](public/_redirects) (`/* /index.html 200`) la resuelve en Netlify y Cloudflare Pages. En otros hostings hay que configurar una regla equivalente.
- Si cambia el dominio, actualiza el `canonical`, las etiquetas `og:url`/`og:image` y los datos schema.org en [src/index.html](src/index.html).

## Estructura

```
src/
├── index.html                # SEO: title, description, Open Graph, Twitter, canonical, JSON-LD
├── styles.css                # Tailwind, tokens de color y animaciones
└── app/
    ├── app.routes.ts         # /home, /aviso-de-privacidad, /proteccion-datos
    ├── layouts/main/         # página principal: orden de las secciones
    ├── components/
    │   ├── navbar/  footer/  contact/
    │   ├── hero/  chat-mockup/          # conversación de WhatsApp animada
    │   ├── how-it-works/  features/  benefits/  languages/
    │   ├── dashboard/                   # panel de caja en tiempo real (mockup)
    │   ├── security/  pricing/  faq/
    │   └── privacy-policy/  data-notice/
    └── shared/
        ├── site.ts                      # contacto, WhatsApp, enlaces y navegación
        ├── reveal.directive.ts          # aparición al hacer scroll
        ├── motion.ts                    # respeta prefers-reduced-motion
        ├── section-nav.service.ts       # navegación a secciones desde cualquier ruta
        └── section-heading.ts
```

## Editar contenido

| Qué | Dónde |
| --- | --- |
| Correo, teléfono, WhatsApp, URL del panel | [src/app/shared/site.ts](src/app/shared/site.ts) |
| Enlaces del menú | `NAV_LINKS` en el mismo archivo |
| Textos de cada sección | El componente de la sección en `src/app/components/` |
| Preguntas frecuentes | [src/app/components/faq](src/app/components/faq) |
| Precios | [src/app/components/pricing](src/app/components/pricing) (hoy: cotización personalizada por sucursal) |
| SEO e imagen para compartir | [src/index.html](src/index.html) y `public/assets/og-image.png` (1200×630) |

**Reglas de contenido:**
- Describir solo funciones que el producto tiene.
- No publicar clientes, testimonios ni métricas sin autorización.
- Los precios del mockup del chat son ilustrativos.

## Accesibilidad y animaciones

- Las animaciones son CSS y se activan al entrar en pantalla. Con "reducir movimiento" activado en el sistema, todo se muestra estático.
- El sitio tiene enlace para saltar al contenido, foco visible y menú móvil usable con teclado (se cierra con Escape). Los mockups animados tienen una descripción alternativa para lectores de pantalla.
- Antes de publicar cambios, revisa que el sitio se vea bien en 390 px de ancho y que no aparezca scroll horizontal.
