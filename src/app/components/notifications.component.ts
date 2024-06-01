import { Component, inject } from '@angular/core';

import { NotificationService } from '@Services/notification.service';
import { ToastComponent } from './toast.component';

@Component({
  selector: 'fortes-notification',
  standalone: true,
  imports: [ToastComponent],
  templateUrl: 'notifications.component.html',
  styleUrl: 'notifications.component.scss',
})
export class NotificationComponent {
  private notificationService = inject(NotificationService);
  protected notifications = this.notificationService.getNotifications();
}
