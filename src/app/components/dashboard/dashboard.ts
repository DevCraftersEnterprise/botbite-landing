import { Component, DestroyRef, inject, signal } from '@angular/core';
import {
  LucideAngularModule,
  Bell,
  BellRing,
  Building2,
  ClipboardList,
  ConciergeBell,
  FileSpreadsheet,
  LayoutDashboard,
  LucideIconData,
  MessageCircle,
  Package,
  QrCode,
  Receipt,
  ShieldAlert,
  ShoppingBag,
  Store,
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
  { icon: ShoppingBag, tone: 'bg-emerald-500/15 text-emerald-300', title: 'Nuevo pedido · Mesa 7', detail: '2× Tacos al pastor, 1× Horchata' },
  { icon: Receipt, tone: 'bg-sky-500/15 text-sky-300', title: 'Solicitud de cuenta · Mesa 3', detail: 'Pagará con tarjeta' },
  { icon: ConciergeBell, tone: 'bg-amber-500/15 text-amber-300', title: 'Amenidad · Terraza 2', detail: 'Servilletas y cubiertos' },
  { icon: ShoppingBag, tone: 'bg-emerald-500/15 text-emerald-300', title: 'Nuevo pedido · Barra 1', detail: '1× Michelada, 1× Guacamole' },
  { icon: ShieldAlert, tone: 'bg-rose-500/15 text-rose-300', title: 'Alerta de comportamiento · Mesa 5', detail: 'Mensajes inapropiados detectados' },
  { icon: Receipt, tone: 'bg-sky-500/15 text-sky-300', title: 'Solicitud de cuenta · Mesa 12', detail: 'Pagará en efectivo' },
];

@Component({
  selector: 'app-dashboard',
  imports: [LucideAngularModule, RevealDirective, SectionHeading],
  templateUrl: './dashboard.html',
})
export class Dashboard {
  protected readonly icons = { Bell, BellRing, LayoutDashboard, MessageCircle, Store, Package, QrCode, ClipboardList };

  protected readonly alerts = [
    { icon: ShoppingBag, title: 'Nuevos pedidos', text: 'Con productos, cantidades, notas y número de mesa.' },
    { icon: Receipt, title: 'Solicitudes de cuenta', text: 'Incluyen el método de pago que eligió el cliente.' },
    { icon: ConciergeBell, title: 'Amenidades', text: 'Servilletas, cubiertos, salsas: lo que pidan, cuando lo pidan.' },
    { icon: ShieldAlert, title: 'Alertas de comportamiento', text: 'Aviso inmediato ante mensajes inapropiados.' },
  ];

  protected readonly panel = [
    { icon: Building2, title: 'Restaurantes y sucursales', text: 'Opera varias ubicaciones con su propio menú y configuración.' },
    { icon: FileSpreadsheet, title: 'Productos con carga masiva', text: 'Importa tu catálogo por CSV y agrega fotos a cada platillo.' },
    { icon: UtensilsCrossed, title: 'Menús y precios', text: 'Organiza categorías, items y recomendaciones por sucursal.' },
    { icon: ClipboardList, title: 'Órdenes', text: 'Consulta el historial y el detalle de cada pedido.' },
    { icon: Bell, title: 'Notificaciones', text: 'Todo lo que pasa en piso, centralizado y en vivo.' },
    { icon: QrCode, title: 'Códigos QR por sucursal', text: 'Genera e imprime los QR de tus mesas desde el panel.' },
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
