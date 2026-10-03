import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideAngularModule,
  ArrowRight,
  AudioLines,
  BellRing,
  Languages,
  QrCode,
  Smartphone,
  Sparkles,
} from 'lucide-angular';
import { ChatMockup } from '../chat-mockup/chat-mockup';
import { RevealDirective } from '../../shared/reveal.directive';
import { SectionNavService } from '../../shared/section-nav.service';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, LucideAngularModule, ChatMockup, RevealDirective],
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly nav = inject(SectionNavService);
  protected readonly icons = { ArrowRight, BellRing, QrCode, Sparkles };

  protected readonly highlights = [
    { icon: Smartphone, label: 'Sin descargar apps' },
    { icon: Languages, label: 'Español, inglés, francés y coreano' },
    { icon: AudioLines, label: 'Texto y notas de voz' },
    { icon: BellRing, label: 'Pedidos a caja en tiempo real' },
  ];
}
