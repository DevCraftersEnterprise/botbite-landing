import { Component } from '@angular/core';
import { LucideAngularModule, BellRing, CreditCard, MessageCircle, QrCode } from 'lucide-angular';
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
      title: 'Escanea el QR en la mesa',
      text: 'Confirma que está en tu restaurante y WhatsApp se abre con un mensaje listo para enviar. Sin descargar nada ni registrarse.',
    },
    {
      icon: MessageCircle,
      title: 'Pide en su idioma',
      text: 'Elige español, inglés, francés o coreano, indica su mesa y pide como le hablaría al mesero: por texto, nota de voz o desde el menú interactivo.',
    },
    {
      icon: BellRing,
      title: 'Tu equipo lo recibe al instante',
      text: 'Cada ronda llega al panel como una comanda en tiempo real. Cuando avanza, el comensal recibe el aviso por WhatsApp.',
    },
    {
      icon: CreditCard,
      title: 'Paga desde la mesa',
      text: 'Pide la cuenta, usa su monedero y paga con un link de Mercado Pago o con el mesero. Si necesita factura, la pide ahí mismo.',
    },
  ];
}
