import { Component } from '@angular/core';
import { LucideAngularModule, CreditCard, LockKeyhole, MapPin, ShieldCheck, TimerReset } from 'lucide-angular';
import { RevealDirective } from '../../shared/reveal.directive';
import { SectionHeading } from '../../shared/section-heading';

@Component({
  selector: 'app-security',
  imports: [LucideAngularModule, RevealDirective, SectionHeading],
  templateUrl: './security.html',
})
export class Security {
  protected readonly icons = { ShieldCheck };

  protected readonly items = [
    {
      icon: MapPin,
      title: 'Verificación de ubicación',
      text: 'Define el radio de cada sucursal. Si el comensal está fuera, no obtiene el acceso para pedir.',
    },
    {
      icon: TimerReset,
      title: 'Código de un solo uso',
      text: 'Cada escaneo genera un código que caduca en minutos y se invalida al usarlo. Sin él, BotBite no abre una cuenta.',
    },
    {
      icon: LockKeyhole,
      title: 'Acceso por restaurante',
      text: 'Cada equipo ve únicamente la información de su restaurante, y el personal solo las sucursales que tiene asignadas.',
    },
    {
      icon: CreditCard,
      title: 'Pagos en Mercado Pago',
      text: 'El comensal paga en el checkout de Mercado Pago. BotBite no ve ni guarda los datos de su tarjeta.',
    },
  ];
}
