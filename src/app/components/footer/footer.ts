import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ArrowUpRight } from 'lucide-angular';
import { NAV_LINKS, SITE } from '../../shared/site';
import { SectionNavService } from '../../shared/section-nav.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly nav = inject(SectionNavService);
  protected readonly links = NAV_LINKS;
  protected readonly site = SITE;
  protected readonly year = new Date().getFullYear();
  protected readonly icons = { ArrowUpRight };
}
