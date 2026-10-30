# AGENTS.md · botbite-lander

Cómo se trabaja en este repo, tanto para personas como para agentes de código. La sección **Forma de trabajo** es igual en los tres repos de BotBite: si la cambias aquí, cámbiala también en los otros dos.

## El ecosistema

| Repo | Qué es | Dónde corre |
|---|---|---|
| `botbite-waiter-api` | API NestJS. Fuente de verdad de restaurantes, sucursales, menús, cuentas y notificaciones | Render, con Postgres en Neon |
| `botbite-web-app` | Panel para restaurantes y su personal (app.botbite.com.mx) | Netlify |
| `botbite-lander` | Landing (botbite.com.mx) | Netlify; el dominio está en GoDaddy con DNS en Netlify |

El mesero de WhatsApp corre en n8n (VPS de Hostinger, lo mantiene Carlos). Habla con la API por HTTP y no se conecta a la base.

## Forma de trabajo

### Ramas, commits y PRs

- No se hace commit directo a `main`. Cada cambio sale de `main` actualizado (`git pull`) en su propia rama: `feat/`, `fix/`, `refactor/`, `chore/` o `docs/`.
- Los commits van en inglés con Conventional Commits: `feat: …`, `fix(netlify): …`, `chore(node): …`.
- Un PR por rama hacia `main`. Lo revisa e integra Sergio. Si el cambio toca varios repos, cada PR dice en qué orden se integran y despliegan.
- Haz push seguido: lo que solo está en tu disco se puede perder.

### Idioma

- Los nombres en el código (variables, clases, columnas, rutas) van en inglés.
- Los comentarios, la documentación y los textos de la interfaz van en español.

### Antes de abrir un PR

- Corre el lint, las pruebas y el build que tenga el repo (ver **Comandos**). Si algo falla, dilo en el PR.
- Comprueba que el cambio funciona, no solo que compila.
- Si cambias variables de entorno, comandos o el despliegue, actualiza el README (y en la API, `.env.template`).

### Dependencias

- Solo se aplican actualizaciones menores o de parche. Las versiones mayores (NestJS, TypeORM, Angular…) no se suben sin acordarlo, porque rompen compatibilidad sin necesidad.
- Se usa Node 22.23.4 (`.nvmrc`), la misma versión que en Render y Netlify.

### Base de datos

- Nunca apuntes a producción desde tu máquina. El `.env` local puede tener credenciales reales; para probar usa un Postgres local o una rama de Neon.
- El esquema solo cambia con migraciones de TypeORM (`synchronize` está apagado). Cada migración tiene su `down()`, y las que ya corrieron en producción no se editan.
- Primero se agrega y después se quita. El código que deja de usar una columna o una tabla se despliega antes que la migración que la borra, porque Render corre la migración mientras la versión anterior sigue atendiendo.
- Si una migración transforma o borra datos, primero se saca un respaldo y se prueba en una rama de Neon con copia de producción.

### Seguridad

- Los secretos no van en el código, en commits, en PRs ni en chats (WhatsApp incluido). Viven en las variables de entorno de Render y Netlify o en las credenciales de n8n.
- Todo acceso a datos respeta la separación por restaurante y por sucursal.
- De los datos personales (teléfonos, datos fiscales) se guarda lo mínimo, y nunca se escriben en logs.

### Coordinación con n8n

- Las rutas que usa el bot (`/v1/bot/*`) se documentan en Swagger (`/docs`). Un cambio incompatible se le avisa a Carlos antes de desplegarlo y la fecha se acuerda con él.
- Las páginas que revisó Meta (`/agentes`, el aviso de privacidad y protección de datos) y el `<head>` de la home no se cambian sin su visto bueno.

### Después de integrar

- `main` se despliega solo. Revisa el despliegue y verifica en producción lo que cambiaste: la salud de la API, la pantalla afectada o un `curl`.

## Este repo: landing

Angular 20.3 con prerender de todas las rutas (`outputMode: "static"`), sin zone.js y con hidratación. Usa Tailwind 4 y lucide-angular.

### Estructura

- `src/app/app.routes.ts`: las rutas, cada una con su `title` y sus datos de SEO (`description` y `path`).
- `src/app/shared/seo.ts`: `SeoTitleStrategy` pone en cada ruta el título, la descripción, Open Graph y el canonical.
- `src/app/shared/site.ts` (contacto y enlaces) y `src/app/shared/legal.ts` (datos del aviso de privacidad).
- `public/_redirects` y `public/_headers`: reglas de Netlify.

### Comandos

```bash
npm ci
npm start          # http://localhost:4200
npm run build      # deja un index.html por ruta en dist/botbite-lander/browser/
```

Todavía no hay pruebas unitarias. Cada cambio se revisa en el navegador y en el HTML que genera el build.

### Agregar una página

1. Agrega la ruta en `app.routes.ts` con su `title` y su `data: seo({ path, description })`.
2. Agrega una reescritura forzada en `public/_redirects`: `/<ruta>  /<ruta>/index.html  200!`. Sin ella, Netlify redirige `/ruta` a `/ruta/`.
3. Agrega `Cache-Control: no-cache` en `public/_headers` para `/<ruta>` y `/<ruta>/`. No repitas reglas para la misma URL, porque Netlify junta los valores.
4. Después del build, revisa que `dist/botbite-lander/browser/<ruta>/index.html` traiga su propio `<title>` y su descripción.

### Reglas

- Meta revisó `/agentes`, `/aviso-de-privacidad`, `/proteccion-datos` y el `<head>` de la home: sus textos y su diseño no se cambian sin el visto bueno de Carlos.
- El contenido tiene que verse sin JavaScript. Las animaciones de aparición solo ocultan elementos cuando `<html>` tiene la clase `js`.

### Despliegue

Netlify publica `main` automáticamente. Para verificar, corre `curl -sI https://botbite.com.mx/<ruta>`: debe responder `200` con `Cache-Control: no-cache`, y el HTML debe traer el `<title>` de esa ruta.
