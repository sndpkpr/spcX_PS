import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class NotificationService {
  public checkGuard = true;
  public notificationCount: number;
  public messageNotificationCount: number;
  public  restrictFunnelOnReload: boolean;
  constructor(private toastr: ToastrService) {
    this.toastr.toastrConfig.autoDismiss = true;
    this.toastr.toastrConfig.tapToDismiss = true;
    this.toastr.toastrConfig.closeButton = false;
    this.notificationCount = 0;
    this.messageNotificationCount = 0;
  }

  SetNotificationCountInHeader(notificationCount?: number): void {
    this.notificationCount = notificationCount;
  }

  GetNotificationCountInHeader(): number {
    return this.notificationCount;
  }

  SetMessageCountInHeader(messagecount?: number): void {
    this.messageNotificationCount = messagecount;
  }

  GetMessageCountInHeader(): number {
    return this.messageNotificationCount;
  }

  Success(body: { message?: string, title?: string }): object {
    return this.toastr.success(this.TranslateMessage(body.message), body.title);
  }

  Error(body: { message?: string, title?: string }): object {
    return this.toastr.error(this.TranslateMessage(body.message), body.title);
  }

  Warning(body: { message?: string, title?: string }): object {
    return this.toastr.warning(this.TranslateMessage(body.message), body.title);
  }

  Info(body: { message?: string, title?: string }): object {
    return this.toastr.info(this.TranslateMessage(body.message), body.title);
  }

  private TranslateMessage(message: string): string {
    return message;
  }
  closeAllToaster(): void {
    this.toastr.clear();
  }
}
