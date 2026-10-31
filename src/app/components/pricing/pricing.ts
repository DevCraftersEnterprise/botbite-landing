import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ArrowRight, Building2, Check, ToggleRight, Wrench } from 'lucide-angular';
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
      title: 'Por sucursal',
      text: 'Cada sucursal tiene su propio menú, su QR y su configuración.',
    },
    {
      icon: ToggleRight,
      title: 'Activa lo que necesites',
      text: 'Elige las funciones de cada sucursal: pagos en línea, monedero, facturación, promociones o encuesta.',
    },
    {
      icon: Wrench,
      title: 'Te lo dejamos listo',
      text: 'El equipo de BotBite conecta tu número de WhatsApp y configura el mesero de cada sucursal.',
    },
  ];

  protected readonly included = [
    'Mesero virtual en WhatsApp para todas tus mesas',
    'Español, inglés, francés y coreano',
    'Notas de voz y búsqueda tolerante a errores',
    'Órdenes y notificaciones en vivo en el panel',
    'Panel multi-sucursal con personal por sucursal',
    'QR fijo con verificación de ubicación',
  ];
}
