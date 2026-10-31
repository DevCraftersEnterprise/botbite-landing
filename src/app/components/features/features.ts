import { Component } from '@angular/core';
import {
  LucideAngularModule,
  BookOpen,
  ChefHat,
  CreditCard,
  FileCheck,
  Image,
  Layers,
  Megaphone,
  PiggyBank,
  QrCode,
  Receipt,
  ScanSearch,
  Smartphone,
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
      title: 'Un QR que no cambia',
      text: 'Imprime un solo código por sucursal. El comensal escanea, confirma su ubicación y la conversación empieza sola.',
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
      icon: BookOpen,
      title: 'Menú interactivo y en PDF',
      text: 'El comensal arma su pedido desde un menú web o consulta el PDF. Todo se actualiza desde el panel.',
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
      icon: Layers,
      title: 'Pedidos por rondas',
      text: 'Cada confirmación es una comanda aparte, y el comensal recibe un aviso cuando avanza.',
    },
    {
      icon: Receipt,
      title: 'Consumo en todo momento',
      text: 'El comensal consulta lo que lleva pedido sin tener que llamar al mesero.',
    },
    {
      icon: CreditCard,
      title: 'Pago con link y propina',
      text: 'Elige su propina y paga con tarjeta en Mercado Pago, o espera al mesero. Tú decides si lo activas.',
    },
    {
      icon: PiggyBank,
      title: 'Monedero de recompensas',
      text: 'Al pagar en línea acumula el porcentaje que tú definas y lo usa en su próxima visita, en cualquiera de tus sucursales.',
    },
    {
      icon: FileCheck,
      title: 'Factura por WhatsApp',
      text: 'Manda su constancia fiscal, confirma sus datos y recibe su factura en el chat. La propina no se factura.',
    },
    {
      icon: Megaphone,
      title: 'Encuesta y promociones',
      text: 'Al terminar, comparte tu encuesta y pregunta si quiere recibir tus promociones. Puede darse de baja cuando quiera.',
    },
  ];
}
