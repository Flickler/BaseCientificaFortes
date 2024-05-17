import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notifications = signal<string[]>([]);

  getNotifications() {
    return this.notifications.asReadonly();
  }

  addNotification(notification: string) {
    this.notifications.update((curr) => [...curr, notification]);
    setTimeout(() => {
      this.removeNotification(notification);
    }, 5000);
  }

  private removeNotification(notification: string) {
    this.notifications.update((curr) =>
      curr!.filter((note) => note != notification)
    );
  }
}
