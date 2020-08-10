import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { ApiService, ErrorHandlerService, InterceptorService, NotificationService } from '../core/coreservice-index';
import { HttpClientModule, HTTP_INTERCEPTORS, } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ToastrModule.forRoot(), ToastContainerModule
  ],
  providers: [ ApiService, ErrorHandlerService, NotificationService, InterceptorService, {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true,
  }],
  exports: [HttpClientModule]
})
export class CoreModule { }
