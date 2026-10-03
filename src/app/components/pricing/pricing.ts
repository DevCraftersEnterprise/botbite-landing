import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ArrowRight, Check, Coins, Gauge, Building2 } from 'lucide-angular';
import { RevealDirective } from '../../shared/reveal.directive';
import { SectionHeading } from '../../shared/section-heading';
import { SectionNavService } from '../../shared/section-nav.service';

@Component({
  selector: 'app-pricing',
  imports: [RouterLink, LucideAngularModule, RevealDirective, SectionHeading],
  templateUrl: './pricing.html',
})
export class Pricing {
  protected readonly nav = inject(SectionNavService);
  protected readonly icons = { ArrowRight, Check };

  protected readonly model = [
    {
      icon: Building2,
      title: 'Créditos por sucursal',
      text: 'Cada sucursal cuenta con su propio saldo de créditos de mensajes.',
    },
    {
      icon: Coins,
      title: 'Pagas por uso',
      text: 'Cada mensaje que BotBite atiende consume un crédito del saldo de la sucursal.',
    },
    {
      icon: Gauge,
      title: 'Paquetes según tu volumen',
      text: 'El equipo de BotBite asigna los créditos de cada sucursal según el paquete que elijas.',
    },
  ];

  protected readonly included = [
    'Mesero virtual en WhatsApp para todas tus mesas',
    'Español, inglés, francés y coreano',
    'Notas de voz y búsqueda tolerante a errores',
    'Notificaciones a caja por WhatsApp y panel web',
    'Panel de administración multi-sucursal',
    'Generación de códigos QR por sucursal',
  ];
}
