import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { HowItWorks } from '../../components/how-it-works/how-it-works';
import { Features } from '../../components/features/features';
import { Benefits } from '../../components/benefits/benefits';
import { Languages } from '../../components/languages/languages';
import { Dashboard } from '../../components/dashboard/dashboard';
import { Security } from '../../components/security/security';
import { Pricing } from '../../components/pricing/pricing';
import { Faq } from '../../components/faq/faq';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-main',
  imports: [Hero, HowItWorks, Features, Benefits, Languages, Dashboard, Security, Pricing, Faq, Contact],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export default class Main {}
