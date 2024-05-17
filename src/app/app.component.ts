import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ToastComponent } from '@Components/toast.component';
import { NotificationComponent } from '@Components/notifications.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastComponent, NotificationComponent],
  styleUrl: 'app.component.scss',
  template: `
    <fortes-toast>Versão de teste</fortes-toast>
    <fortes-notification />
    <router-outlet />
  `,
})
export class AppComponent {}
