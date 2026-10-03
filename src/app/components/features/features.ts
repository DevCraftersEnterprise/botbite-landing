import { Component } from '@angular/core';
import {
  LucideAngularModule,
  ChefHat,
  ConciergeBell,
  FileText,
  Image,
  QrCode,
  Receipt,
  ScanSearch,
  Smartphone,
  Wallet,
} from 'lucide-angular';
import { RevealDirective } from '../../shared/reveal.directive';
import { SectionHeading } from '../../shared/section-heading';

@Component({
  selector: 'app-features',
  imports: [LucideAngularModule, RevealDirective, SectionHeading],
  templateUrl: './features.html',
})
export class Features {
  protected readonly features = [
    {
      icon: QrCode,
      title: 'Un QR por mesa',
      text: 'Cada código identifica la sucursal y la ubicación. El comensal escanea y la conversación empieza sola.',
    },
    {
      icon: Smartphone,
      title: 'Sin apps ni registros',
      text: 'Funciona en el WhatsApp que tus clientes ya usan. Nada que instalar, nada que recordar.',
    },
    {
      icon: ScanSearch,
      title: 'Entiende pedidos naturales',
      text: 'Varios productos en un solo mensaje, cantidades y notas como “sin cebolla”. Tolera errores de escritura.',
    },
    {
      icon: FileText,
      title: 'Menú digital y en PDF',
      text: 'Comparte tu menú completo dentro del chat y mantenlo actualizado desde el panel.',
    },
    {
      icon: Image,
      title: 'Fotos y detalles del platillo',
      text: 'El comensal puede pedir la foto o la descripción de cualquier platillo antes de ordenar.',
    },
    {
      icon: ChefHat,
      title: 'Recomendaciones de la casa',
      text: 'Destaca los platillos que quieres vender más y BotBite los sugiere cuando le piden recomendación.',
    },
    {
      icon: ConciergeBell,
      title: 'Amenidades a un mensaje',
      text: 'Servilletas, cubiertos o lo que haga falta: la solicitud llega directo a tu equipo.',
    },
    {
      icon: Receipt,
      title: 'Consumo en todo momento',
      text: 'El comensal consulta lo que lleva pedido sin tener que llamar al mesero.',
    },
    {
      icon: Wallet,
      title: 'Pide la cuenta desde la mesa',
      text: 'Indica su método de pago y caja recibe el aviso para cobrar sin vueltas.',
    },
  ];
}
