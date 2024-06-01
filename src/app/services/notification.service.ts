import { Injectable, signal } from '@angular/core';

import { Notification } from '@Types/notification.type';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notifications = signal<Notification[]>([]);

  getNotifications() {
    return this.notifications.asReadonly();
  }

  addNotification(notification: Notification) {
    this.notifications.update((curr) => [...curr, notification]);
    setTimeout(() => {
      this.removeNotification(notification);
    }, 5000);
  }

  private removeNotification(notification: Notification) {
    this.notifications.update((curr) =>
      curr.filter((note) => note != notification)
    );
  }
}
