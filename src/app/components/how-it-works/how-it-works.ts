import { Component } from '@angular/core';
import { LucideAngularModule, BellRing, MessageCircle, QrCode, ShoppingBag } from 'lucide-angular';
import { RevealDirective } from '../../shared/reveal.directive';
import { SectionHeading } from '../../shared/section-heading';

@Component({
  selector: 'app-how-it-works',
  imports: [LucideAngularModule, RevealDirective, SectionHeading],
  templateUrl: './how-it-works.html',
})
export class HowItWorks {
  protected readonly steps = [
    {
      icon: QrCode,
      title: 'Escanea el QR de la mesa',
      text: 'WhatsApp se abre con un mensaje listo para enviar. Sin descargar nada ni registrarse.',
    },
    {
      icon: MessageCircle,
      title: 'Conversa en su idioma',
      text: 'Elige español, inglés, francés o coreano, indica su mesa y consulta el menú, fotos o recomendaciones.',
    },
    {
      icon: ShoppingBag,
      title: 'Pide como le hablaría al mesero',
      text: '“2 tacos al pastor sin cebolla”: por texto o nota de voz. BotBite arma el carrito y pide confirmación.',
    },
    {
      icon: BellRing,
      title: 'Tu caja lo recibe al instante',
      text: 'El pedido llega por WhatsApp y al panel web en tiempo real. Lo mismo con la cuenta y las amenidades.',
    },
  ];
}
