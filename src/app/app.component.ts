import { ToastComponent } from '@Components/toast.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastComponent],
  styleUrl: 'app.component.scss',
  template: `
    <fortes-toast>Versão de teste</fortes-toast>
    <router-outlet />
  `,
})
export class AppComponent {}
