import { Component, DestroyRef, inject, signal } from '@angular/core';
import {
  LucideAngularModule,
  ArrowLeft,
  CheckCheck,
  FileText,
  Mic,
  Phone,
  Play,
  Video,
} from 'lucide-angular';
import { onHostVisibility, prefersReducedMotion } from '../../shared/motion';

type Kind = 'text' | 'lang' | 'menu' | 'voice' | 'cart';

interface ChatMessage {
  id: number;
  from: 'bot' | 'user';
  kind: Kind;
  text?: string;
  time: string;
}

/** Guion ilustrativo de una conversación con BotBite (precios de ejemplo). */
const SCRIPT: Omit<ChatMessage, 'id'>[] = [
  { from: 'user', kind: 'text', text: 'Hola, quiero ordenar 👋', time: '14:02' },
  { from: 'bot', kind: 'lang', time: '14:02' },
  { from: 'user', kind: 'text', text: 'Español · Mesa 7', time: '14:02' },
  { from: 'bot', kind: 'menu', time: '14:02' },
  {
    from: 'user',
    kind: 'voice',
    text: '“Dos tacos al pastor sin cebolla y una horchata”',
    time: '14:03',
  },
  { from: 'bot', kind: 'cart', time: '14:03' },
  { from: 'user', kind: 'text', text: 'Sí, confirmo ✅', time: '14:03' },
  {
    from: 'bot',
    kind: 'text',
    text: '¡Listo! Tu pedido ya llegó a caja. Si necesitas algo más, aquí estoy. 🍽️',
    time: '14:03',
  },
];

const WAVE = [6, 12, 18, 10, 20, 14, 8, 16, 22, 12, 7, 15, 19, 9, 13, 6, 11];

@Component({
  selector: 'app-chat-mockup',
  imports: [LucideAngularModule],
  templateUrl: './chat-mockup.html',
  host: { class: 'block' },
})
export class ChatMockup {
  protected readonly icons = { ArrowLeft, CheckCheck, FileText, Mic, Phone, Play, Video };
  protected readonly wave = WAVE;
  protected readonly messages = signal<ChatMessage[]>([]);
  protected readonly typing = signal<'bot' | 'user' | null>(null);

  private step = 0;
  private uid = 0;
  private timer: ReturnType<typeof setTimeout> | undefined;
  private running = false;

  constructor() {
    if (prefersReducedMotion()) {
      this.messages.set(SCRIPT.slice(-5).map((m, i) => ({ ...m, id: i })));
      return;
    }

    inject(DestroyRef).onDestroy(() => this.pause());
    onHostVisibility((visible) => (visible ? this.resume() : this.pause()));
  }

  private resume(): void {
    if (this.running) return;
    this.running = true;
    this.schedule(400);
  }

  private pause(): void {
    this.running = false;
    clearTimeout(this.timer);
  }

  private schedule(delay: number): void {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.tick(), delay);
  }

  private tick(): void {
    if (!this.running) return;

    if (this.step >= SCRIPT.length) {
      this.step = 0;
      this.messages.set([]);
      this.schedule(700);
      return;
    }

    const next = SCRIPT[this.step];
    if (this.typing() === null) {
      this.typing.set(next.from);
      this.schedule(next.from === 'bot' ? 1100 : 750);
      return;
    }

    this.typing.set(null);
    this.messages.update((list) => [...list, { ...next, id: this.uid++ }]);
    this.step++;
    this.schedule(this.step >= SCRIPT.length ? 4200 : 900);
  }
}
