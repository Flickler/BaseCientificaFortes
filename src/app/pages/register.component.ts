import { Component } from '@angular/core';

import { HeaderComponent } from '@Components/header.component';
import { TabLinkComponent } from '@Components/tab-link.component';

@Component({
  standalone: true,
  imports: [HeaderComponent, TabLinkComponent],
  templateUrl: 'register.component.html',
  styleUrl: 'register.component.scss',
})
export class RegisterComponent {}
