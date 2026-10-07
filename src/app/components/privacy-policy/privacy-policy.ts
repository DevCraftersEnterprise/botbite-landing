import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WHATSAPP_PRIVACY } from '../../shared/legal';
import { SITE } from '../../shared/site';

@Component({
  selector: 'app-privacy-policy',
  imports: [RouterLink],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.css',
})
export default class PrivacyPolicy {
  protected readonly legal = WHATSAPP_PRIVACY;
  protected readonly email = SITE.email;
}
