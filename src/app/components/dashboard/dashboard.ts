import { Component, DestroyRef, inject, signal } from '@angular/core';
import {
  LucideAngularModule,
  Bell,
  BellRing,
  Bot,
  Building2,
  ChartNoAxesColumn,
  ClipboardList,
  CreditCard,
  FileSpreadsheet,
  LayoutDashboard,
  LucideIconData,
  Package,
  QrCode,
  Receipt,
  ShoppingBag,
  Store,
  TriangleAlert,
  UsersRound,
  UtensilsCrossed,
} from 'lucide-angular';
import { RevealDirective } from '../../shared/reveal.directive';
import { SectionHeading } from '../../shared/section-heading';
import { onHostVisibility, prefersReducedMotion } from '../../shared/motion';

interface Notice {
  id: number;
  icon: LucideIconData;
  tone: string;
  title: string;
  detail: string;
}

/** Notificaciones de ejemplo que rotan en la maqueta del panel. */
const POOL: Omit<Notice, 'id'>[] = [
  { icon: ShoppingBag, tone: 'bg-emerald-500/15 text-emerald-300', title: 'Comanda · Mesa 7', detail: '2× Tacos al pastor, 1× Horchata' },
  { icon: Receipt, tone: 'bg-sky-500/15 text-sky-300', title: 'Cuenta solicitada · Mesa 3', detail: 'Total $440.00 · monedero -$40.00' },
  { icon: CreditCard, tone: 'bg-amber-500/15 text-amber-300', title: 'Pago recibido · Terraza 2', detail: 'Mercado Pago · $352.00 con propina' },
  { icon: ShoppingBag, tone: 'bg-emerald-500/15 text-emerald-300', title: 'Comanda · Barra 1', detail: '1× Michelada, 1× Guacamole' },
  { icon: TriangleAlert, tone: 'bg-rose-500/15 text-rose-300', title: 'Alerta · Mesa 5', detail: 'El pago no cubre la cuenta' },
  { icon: Receipt, tone: 'bg-sky-500/15 text-sky-300', title: 'Pagará con el mesero · Mesa 12', detail: 'Total $215.00' },
];

@Component({
  selector: 'app-dashboard',
  imports: [LucideAngularModule, RevealDirective, SectionHeading],
  templateUrl: './dashboard.html',
})
export class Dashboard {
  protected readonly icons = { Bell, BellRing, LayoutDashboard, Store, Package, QrCode, ClipboardList };

  protected readonly alerts = [
    { icon: ShoppingBag, title: 'Comandas', text: 'Cada ronda con productos, cantidades, notas y mesa.' },
    { icon: Receipt, title: 'Cuentas solicitadas', text: 'Con el descuento del monedero y el total a cobrar.' },
    { icon: CreditCard, title: 'Pagos recibidos', text: 'Consumo, propina y operación. Ya no hay que cobrarle.' },
    { icon: TriangleAlert, title: 'Alertas', text: 'Pagos que no cuadran y cuentas que nadie pidió.' },
  ];

  protected readonly panel = [
    { icon: Building2, title: 'Restaurantes y sucursales', text: 'Opera varias ubicaciones con su propio menú y configuración.' },
    { icon: FileSpreadsheet, title: 'Productos con carga masiva', text: 'Importa tu catálogo por CSV y agrega fotos a cada platillo.' },
    { icon: UtensilsCrossed, title: 'Menús y precios', text: 'Organiza categorías, familias de platillos y recomendaciones.' },
    { icon: ClipboardList, title: 'Órdenes en vivo', text: 'Cada mesa con sus rondas y estados. Tu equipo también puede abrir cuentas.' },
    { icon: Bell, title: 'Notificaciones', text: 'Todo lo que pasa en piso, centralizado y en vivo.' },
    { icon: QrCode, title: 'QR por sucursal', text: 'Genera e imprime un código fijo desde el panel.' },
    { icon: UsersRound, title: 'Personal', text: 'Cajeros y meseros con acceso solo a sus sucursales.' },
    { icon: ChartNoAxesColumn, title: 'Indicadores del día', text: 'Cuentas, mesas abiertas, ventas y ticket promedio.' },
    { icon: Bot, title: 'Mesero digital', text: 'Ubicación, mesas, horario de cierre y encuesta de cada sucursal.' },
  ];

  protected readonly notices = signal<Notice[]>(POOL.slice(0, 4).map((n, i) => ({ ...n, id: i })));

  private cursor = 4;
  private uid = 4;
  private timer: ReturnType<typeof setInterval> | undefined;

  constructor() {
    inject(DestroyRef).onDestroy(() => this.stop());
    if (prefersReducedMotion()) return;
    onHostVisibility((visible) => (visible ? this.start() : this.stop()));
  }

  private start(): void {
    if (this.timer) return;
    this.timer = setInterval(() => {
      const next = POOL[this.cursor % POOL.length];
      this.cursor++;
      this.notices.update((list) => [{ ...next, id: this.uid++ }, ...list].slice(0, 4));
    }, 3200);
  }

  private stop(): void {
    clearInterval(this.timer);
    this.timer = undefined;
  }
}
