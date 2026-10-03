import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Menu, X, LogIn, ArrowRight } from 'lucide-angular';
import { NAV_LINKS, SITE } from '../../shared/site';
import { SectionNavService } from '../../shared/section-nav.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  host: {
    '(window:scroll)': 'onScroll()',
    '(document:keydown.escape)': 'close()',
  },
})
export class Navbar {
  protected readonly nav = inject(SectionNavService);
  protected readonly links = NAV_LINKS;
  protected readonly site = SITE;
  protected readonly icons = { Menu, X, LogIn, ArrowRight };

  protected readonly isOpen = signal(false);
  protected readonly scrolled = signal(false);

  protected onScroll(): void {
    const value = window.scrollY > 8;
    if (value !== this.scrolled()) this.scrolled.set(value);
  }

  protected toggle(): void {
    this.isOpen.update((v) => !v);
  }

  close(): void {
    this.isOpen.set(false);
  }

  protected go(event: Event, id: string): void {
    this.nav.go(event, id);
    this.close();
  }
}
