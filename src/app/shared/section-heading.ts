import { Component, input } from '@angular/core';
import { RevealDirective } from './reveal.directive';

@Component({
  selector: 'app-section-heading',
  imports: [RevealDirective],
  host: { class: 'block' },
  template: `
    <div
      class="max-w-2xl"
      [class.mx-auto]="align() === 'center'"
      [class.text-center]="align() === 'center'"
    >
      @if (eyebrow()) {
        <p appReveal [class]="dark() ? 'eyebrow border-white/15 bg-white/5 text-neutral-300' : 'eyebrow'">
          {{ eyebrow() }}
        </p>
      }
      <h2
        appReveal
        [revealDelay]="60"
        [id]="headingId()"
        class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
        [class.text-white]="dark()"
        [class.text-neutral-950]="!dark()"
      >
        {{ title() }}
      </h2>
      @if (description()) {
        <p
          appReveal
          [revealDelay]="120"
          class="mt-4 text-base leading-relaxed sm:text-lg"
          [class.text-neutral-400]="dark()"
          [class.text-neutral-600]="!dark()"
        >
          {{ description() }}
        </p>
      }
    </div>
  `,
})
export class SectionHeading {
  readonly eyebrow = input<string>();
  readonly title = input.required<string>();
  readonly description = input<string>();
  readonly headingId = input<string>();
  readonly align = input<'center' | 'left'>('center');
  readonly dark = input(false);
}
