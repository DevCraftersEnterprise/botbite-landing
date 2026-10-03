import { Component } from '@angular/core';
import { LucideAngularModule, Check, Store, UsersRound } from 'lucide-angular';
import { RevealDirective } from '../../shared/reveal.directive';
import { SectionHeading } from '../../shared/section-heading';

@Component({
  selector: 'app-benefits',
  imports: [LucideAngularModule, RevealDirective, SectionHeading],
  templateUrl: './benefits.html',
})
export class Benefits {
  protected readonly icons = { Check, Store, UsersRound };

  protected readonly forRestaurant = [
    'Tu equipo deja de tomar notas y se enfoca en servir y atender mejor.',
    'Pedidos por escrito y confirmados por el cliente: menos errores de comanda.',
    'Atiende a turistas en su idioma sin contratar personal bilingüe.',
    'Cada pedido, cuenta o solicitud llega a caja en tiempo real.',
    'Administra sucursales, menús, productos y códigos QR desde un solo panel.',
  ];

  protected readonly forGuests = [
    'Piden cuando quieren, sin esperar a que pase el mesero.',
    'Conversan en su idioma, escribiendo o con notas de voz.',
    'Ven fotos, descripciones y recomendaciones antes de decidir.',
    'Consultan su consumo y piden la cuenta desde la mesa.',
    'Nada que descargar: solo escanear y escribir.',
  ];
}
