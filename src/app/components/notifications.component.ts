import { NotificationService } from '@Services/notification.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'fortes-notification',
  standalone: true,
  imports: [],
  templateUrl: 'notifications.component.html',
  styleUrl: 'notifications.component.scss',
})
export class NotificationComponent {
  private notificationService = inject(NotificationService);
  protected notifications = this.notificationService.getNotifications();
}
