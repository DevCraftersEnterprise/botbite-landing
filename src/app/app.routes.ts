import { Routes } from '@angular/router';
import { PageSeo } from './shared/seo';

const seo = (data: PageSeo) => ({ seo: data });

/** <head> de la página principal: idéntico al de src/index.html (no cambiar). */
const HOME = {
  title: 'BotBite · Mesero virtual por WhatsApp para restaurantes',
  data: seo({
    path: '/',
    description:
      'BotBite es el mesero virtual por WhatsApp para restaurantes: tus clientes escanean el QR de la mesa y piden por texto o nota de voz en español, inglés, francés o coreano. Los pedidos llegan a caja en tiempo real.',
    socialDescription:
      'Pedidos desde la mesa con un QR, en 4 idiomas, por texto o nota de voz. Tu caja los recibe al instante.',
  }),
  loadComponent: () => import('./layouts/main/main'),
};

export const routes: Routes = [
  // Sitio del mesero virtual para restaurantes.
  {
    path: '',
    loadComponent: () => import('./layouts/site/site-layout'),
    children: [
      // La raíz sirve la página principal directamente (sin redirección), y
      // /home se mantiene porque los enlaces internos usan /home#seccion.
      { path: '', pathMatch: 'full', ...HOME },
      { path: 'home', ...HOME },
      {
        path: 'aviso-de-privacidad',
        title: 'Aviso de privacidad · BotBite',
        data: seo({
          path: '/aviso-de-privacidad',
          description:
            'Aviso de privacidad de BotBite: cómo tratamos los datos personales del sitio web y del servicio de asistentes por WhatsApp, y cómo ejercer tus derechos ARCO o solicitar la eliminación de tus datos.',
        }),
        loadComponent: () => import('./components/privacy-policy/privacy-policy'),
      },
      {
        path: 'proteccion-datos',
        title: 'Protección de datos · BotBite',
        data: seo({
          path: '/proteccion-datos',
          description:
            'Cómo protege BotBite los datos personales de sus clientes y de las personas que se comunican por WhatsApp.',
        }),
        loadComponent: () => import('./components/data-notice/data-notice'),
      },
    ],
  },

  // BotBite para negocios de servicios (página independiente).
  {
    path: 'agentes',
    title: 'BotBite · Asistente de WhatsApp con IA para negocios de servicios',
    data: seo({
      path: '/agentes',
      description:
        'BotBite conecta un asistente con inteligencia artificial al WhatsApp de tu negocio: responde dudas, agenda y confirma citas y envía recordatorios. Para consultorios, psicólogos, inmobiliarias y negocios de servicios en México.',
    }),
    loadComponent: () => import('./pages/agentes/agentes'),
  },

  { path: '**', redirectTo: '' },
];
