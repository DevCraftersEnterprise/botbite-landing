import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: 'BotBite · Mesero virtual por WhatsApp para restaurantes',
    loadComponent: () => import('./layouts/main/main'),
  },
  {
    path: 'aviso-de-privacidad',
    title: 'Aviso de privacidad · BotBite',
    loadComponent: () => import('./components/privacy-policy/privacy-policy'),
  },
  {
    path: 'proteccion-datos',
    title: 'Protección de datos personales · BotBite',
    loadComponent: () => import('./components/data-notice/data-notice'),
  },
  { path: '**', redirectTo: 'home' },
];
