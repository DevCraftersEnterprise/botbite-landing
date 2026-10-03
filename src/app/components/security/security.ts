import { Component } from '@angular/core';
import { LucideAngularModule, KeyRound, LockKeyhole, RefreshCcw, ShieldAlert, ShieldCheck } from 'lucide-angular';
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
      icon: RefreshCcw,
      title: 'QR con token rotativo',
      text: 'Los códigos de mesa se validan con un token que cambia. Así se evitan pedidos falsos hechos a distancia.',
    },
    {
      icon: KeyRound,
      title: 'Webhooks verificados',
      text: 'Solo se procesan mensajes auténticos que llegan desde WhatsApp; las solicitudes no firmadas se descartan.',
    },
    {
      icon: LockKeyhole,
      title: 'Acceso por restaurante',
      text: 'Cada equipo ve únicamente la información de su restaurante y sus sucursales.',
    },
    {
      icon: ShieldAlert,
      title: 'Moderación de conversaciones',
      text: 'Si un usuario envía mensajes inapropiados, tu equipo recibe una alerta para actuar a tiempo.',
    },
  ];
}
