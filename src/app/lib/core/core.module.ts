import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { ApiService, ErrorHandlerService, InterceptorService, NotificationService } from '../core/coreservice-index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastrModule.forRoot()
  ],
  providers: [ ApiService, ErrorHandlerService, NotificationService, InterceptorService, {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true,
  }],
  exports: [
    ToastrModule]
})
export class CoreModule { }
