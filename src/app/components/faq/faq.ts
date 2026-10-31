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
      a: 'No. Escanean el código QR de la mesa y se abre WhatsApp con un mensaje listo para enviar. Desde ahí conversan con BotBite como con cualquier contacto.',
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
      a: 'Cuando el cliente confirma, cada ronda aparece como una comanda en el panel web en tiempo real. Tu equipo la pasa a preparación o entregada, y ahí mismo ve las cuentas solicitadas, los pagos y las alertas.',
    },
    {
      q: '¿Se puede pagar desde WhatsApp?',
      a: 'Sí, si activas Mercado Pago. El comensal elige su propina y paga con un link, y el dinero llega a tu cuenta de Mercado Pago, con sus comisiones. También puede esperar al mesero y pagar como siempre. BotBite no ve ni guarda datos de tarjetas.',
    },
    {
      q: '¿Cómo funciona el monedero?',
      a: 'Al pagar en línea, el comensal acumula un porcentaje de su consumo, sin contar la propina. Tú defines el porcentaje. El saldo no vence, se comparte entre tus sucursales y puede usarlo, completo o en parte, al pedir la cuenta en su próxima visita.',
    },
    {
      q: '¿Mis clientes pueden facturar?',
      a: 'Sí. El comensal manda su Constancia de Situación Fiscal por WhatsApp, confirma sus datos y recibe su factura en el chat. Si ya facturó antes, puede reutilizar sus datos. La propina no se factura.',
    },
    {
      q: '¿Cómo cargo mi menú?',
      a: 'Desde el panel web: das de alta productos uno por uno o en bloque con un archivo CSV, agregas fotos, armas tus menús por sucursal y marcas tus recomendaciones. También puedes compartir tu menú en PDF.',
    },
    {
      q: '¿Funciona si tengo varias sucursales?',
      a: 'Sí. Cada sucursal tiene su propio menú, su QR, sus notificaciones y sus funciones, todo administrado desde la misma cuenta. Cada cajero o mesero solo ve las sucursales que tiene asignadas.',
    },
    {
      q: '¿Qué evita que alguien haga pedidos falsos desde fuera?',
      a: 'Para pedir hay que escanear el QR: cada escaneo genera un código que caduca en minutos y solo sirve una vez. Además, puedes exigir que el comensal esté dentro del radio de tu sucursal. Si alguien escribe sin ese código, BotBite le pide escanearlo.',
    },
    {
      q: '¿Cómo se cobra el servicio?',
      a: 'Con un plan a la medida, según tus sucursales y las funciones que actives. Escríbenos y te preparamos una cotización.',
    },
  ];
}
