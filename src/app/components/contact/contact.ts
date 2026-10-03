import { Component } from '@angular/core';
import { LucideAngularModule, ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-angular';
import { RevealDirective } from '../../shared/reveal.directive';
import { SITE } from '../../shared/site';

@Component({
  selector: 'app-contact',
  imports: [LucideAngularModule, RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  protected readonly site = SITE;
  protected readonly icons = { ArrowUpRight, Mail, MapPin, MessageCircle, Phone };
}
