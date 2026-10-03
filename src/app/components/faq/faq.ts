import { Component } from '@angular/core';
import { LucideAngularModule, Plus } from 'lucide-angular';
import { RevealDirective } from '../../shared/reveal.directive';
import { SectionHeading } from '../../shared/section-heading';

@Component({
  selector: 'app-faq',
  imports: [LucideAngularModule, RevealDirective, SectionHeading],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {
  protected readonly icons = { Plus };

  protected readonly items = [
    {
      q: '¿Mis clientes tienen que descargar una app?',
      a: 'No. Escanean el código QR de su mesa y se abre WhatsApp con un mensaje listo para enviar. Desde ahí conversan con BotBite como con cualquier contacto.',
    },
    {
      q: '¿En qué idiomas atiende?',
      a: 'En español, inglés, francés y coreano. El comensal elige su idioma al iniciar y BotBite le responde en él, incluyendo la traducción de las descripciones de tus platillos.',
    },
    {
      q: '¿Entiende notas de voz?',
      a: 'Sí. Las notas de voz se transcriben con inteligencia artificial y se procesan igual que un mensaje escrito, así que el cliente puede pedir hablando.',
    },
    {
      q: '¿Cómo llegan los pedidos a mi restaurante?',
      a: 'Cuando el cliente confirma su carrito, el pedido llega a caja por WhatsApp y aparece en el panel web en tiempo real. Lo mismo ocurre con solicitudes de cuenta, amenidades y alertas.',
    },
    {
      q: '¿BotBite cobra a mis clientes?',
      a: 'No procesa pagos. El comensal pide la cuenta desde WhatsApp e indica su método de pago; tu equipo recibe el aviso y cobra como siempre.',
    },
    {
      q: '¿Cómo cargo mi menú?',
      a: 'Desde el panel web: das de alta productos uno por uno o en bloque con un archivo CSV, agregas fotos, armas tus menús por sucursal y marcas tus recomendaciones. También puedes compartir tu menú en PDF.',
    },
    {
      q: '¿Funciona si tengo varias sucursales?',
      a: 'Sí. Cada sucursal tiene su propio menú, sus códigos QR, sus notificaciones y su saldo de créditos, todo administrado desde la misma cuenta.',
    },
    {
      q: '¿Qué evita que alguien haga pedidos falsos desde fuera?',
      a: 'Los códigos QR usan un token rotativo que se valida en cada conversación, de modo que no basta con conocer el número de WhatsApp para pedir a una mesa.',
    },
    {
      q: '¿Cómo se cobra el servicio?',
      a: 'Con créditos de mensajes por sucursal: cada mensaje atendido consume un crédito. Escríbenos y te preparamos una cotización según tu volumen.',
    },
  ];
}
