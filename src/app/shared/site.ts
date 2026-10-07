/** Datos de contacto y enlaces compartidos por toda la landing. */
export const SITE = {
  name: 'BotBite',
  baseUrl: 'https://botbite.com.mx',
  /** WhatsApp sin mensaje predefinido (página para negocios de servicios). */
  whatsappPlainHref: 'https://wa.me/526441346676',
  email: 'clientes@botbite.com.mx',
  phoneDisplay: '+52 644 134 6676',
  phoneHref: 'tel:+526441346676',
  whatsappHref:
    'https://wa.me/526441346676?text=' +
    encodeURIComponent('Hola, me interesa una demo de BotBite para mi restaurante.'),
  demoMailHref:
    'mailto:clientes@botbite.com.mx?subject=' +
    encodeURIComponent('Quiero una demo de BotBite'),
  location: 'Ciudad Obregón, Sonora, México',
  appLoginUrl: 'https://app.botbite.com.mx/login',
} as const;

export interface NavLink {
  id: string;
  label: string;
}

export const NAV_LINKS: readonly NavLink[] = [
  { id: 'como-funciona', label: 'Cómo funciona' },
  { id: 'funciones', label: 'Funciones' },
  { id: 'panel', label: 'Panel de caja' },
  { id: 'precios', label: 'Precios' },
  { id: 'faq', label: 'Preguntas' },
];
