import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api-service/api.service';
import { ErrorHandlerService } from './services/error-handler/error-handler.service';
import { InterceptorService } from './services/interceptor/interceptor.service';
import { NotificationService } from './services/notification-service/notification.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  // providers: [ApiService, ErrorHandlerService, InterceptorService, NotificationService]
})
export class CoreModule { }
