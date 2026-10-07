import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ArrowRight,
  ArrowUpRight,
  BellRing,
  Brain,
  Building2,
  CalendarCheck,
  Clock,
  Headset,
  Link2,
  Lock,
  LucideAngularModule,
  Mail,
  MessageCircle,
  Mic,
  Phone,
  Rocket,
  Settings2,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Store,
  UtensilsCrossed,
} from 'lucide-angular';
import { RevealDirective } from '../../shared/reveal.directive';
import { SITE } from '../../shared/site';
import { skipToContent } from '../../shared/skip-to-content';

/**
 * BotBite para negocios de servicios (consultorios, psicólogos, inmobiliarias…).
 * Página independiente del sitio del mesero virtual; la revisa Meta en la
 * verificación de proveedor de tecnología de WhatsApp. No usar logos de Meta,
 * WhatsApp o Facebook ni frases como "Partner oficial de Meta".
 */
@Component({
  selector: 'app-agentes',
  imports: [RouterLink, LucideAngularModule, RevealDirective],
  templateUrl: './agentes.html',
  styleUrl: './agentes.css',
})
export default class Agentes {
  protected readonly site = SITE;
  protected readonly year = new Date().getFullYear();
  protected readonly skip = skipToContent;
  protected readonly icons = {
    ArrowRight,
    ArrowUpRight,
    Lock,
    Mail,
    MessageCircle,
    Phone,
    ShieldCheck,
    Sparkles,
    UtensilsCrossed,
  };

  protected readonly audiences = [
    {
      icon: Stethoscope,
      title: 'Consultorios dentales',
      text: 'Agenda, confirma y recuerda citas sin perder pacientes.',
    },
    {
      icon: Brain,
      title: 'Psicólogos y terapeutas',
      text: 'Organiza tus sesiones y responde dudas frecuentes con discreción.',
    },
    {
      icon: Building2,
      title: 'Inmobiliarias',
      text: 'Atiende prospectos al instante y agenda visitas a propiedades.',
    },
    {
      icon: Store,
      title: 'Otros negocios de servicios',
      text: 'Clínicas, estéticas, despachos y más.',
    },
  ];

  protected readonly capabilities = [
    { icon: Clock, text: 'Responde 24/7 preguntas sobre servicios, precios, horarios y ubicación.' },
    { icon: CalendarCheck, text: 'Agenda citas directamente en tu calendario.' },
    { icon: BellRing, text: 'Envía confirmaciones y recordatorios para reducir ausencias.' },
    { icon: Mic, text: 'Entiende mensajes de voz.' },
    { icon: Headset, text: 'Te pasa la conversación cuando el cliente necesita atención personal.' },
  ];

  protected readonly steps = [
    { icon: Link2, text: 'Conectas el WhatsApp de tu negocio a BotBite en unos minutos.' },
    { icon: Settings2, text: 'Configuramos tu asistente con la información de tu negocio.' },
    { icon: Rocket, text: 'Tu asistente empieza a atender a tus clientes.' },
  ];
}
