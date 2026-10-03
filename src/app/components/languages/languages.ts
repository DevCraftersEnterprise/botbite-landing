import { Component, DestroyRef, inject, signal } from '@angular/core';
import { LucideAngularModule, AudioLines, Languages as LanguagesIcon, Mic, Sparkles } from 'lucide-angular';
import { RevealDirective } from '../../shared/reveal.directive';
import { SectionHeading } from '../../shared/section-heading';
import { onHostVisibility, prefersReducedMotion } from '../../shared/motion';

interface Lang {
  code: 'es' | 'en' | 'fr' | 'ko';
  label: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-languages',
  imports: [LucideAngularModule, RevealDirective, SectionHeading],
  templateUrl: './languages.html',
})
export class Languages {
  protected readonly icons = { AudioLines, LanguagesIcon, Mic, Sparkles };
  protected readonly wave = [8, 14, 22, 12, 26, 18, 10, 20, 28, 14, 9, 18, 24, 11, 16, 8, 13, 20, 12, 7];

  protected readonly langs: Lang[] = [
    {
      code: 'es',
      label: 'ES',
      name: 'Español',
      description: 'Tortilla de maíz con cerdo marinado al pastor, piña, cebolla y cilantro.',
    },
    {
      code: 'en',
      label: 'EN',
      name: 'English',
      description: 'Corn tortilla with marinated al pastor pork, pineapple, onion and cilantro.',
    },
    {
      code: 'fr',
      label: 'FR',
      name: 'Français',
      description: 'Tortilla de maïs au porc mariné al pastor, ananas, oignon et coriandre.',
    },
    {
      code: 'ko',
      label: 'KO',
      name: '한국어',
      description: '알 파스토르 양념 돼지고기, 파인애플, 양파, 고수를 올린 옥수수 토르티야.',
    },
  ];

  protected readonly active = signal(0);

  private timer: ReturnType<typeof setInterval> | undefined;
  private userPicked = false;

  constructor() {
    inject(DestroyRef).onDestroy(() => this.stop());
    if (prefersReducedMotion()) return;
    onHostVisibility((visible) => (visible ? this.start() : this.stop()));
  }

  protected select(index: number): void {
    this.userPicked = true;
    this.stop();
    this.active.set(index);
  }

  protected onTabKey(event: KeyboardEvent, index: number): void {
    const delta = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
    if (!delta) return;
    event.preventDefault();
    const next = (index + delta + this.langs.length) % this.langs.length;
    this.select(next);
    document.getElementById('lang-tab-' + this.langs[next].code)?.focus();
  }

  private start(): void {
    if (this.userPicked || this.timer) return;
    this.timer = setInterval(() => this.active.update((i) => (i + 1) % this.langs.length), 2800);
  }

  private stop(): void {
    clearInterval(this.timer);
    this.timer = undefined;
  }
}
