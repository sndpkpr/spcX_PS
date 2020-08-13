import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS, } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { ApiService, ErrorHandlerService, InterceptorService, NotificationService } from '../core/coreservice-index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [ ApiService, ErrorHandlerService, NotificationService, InterceptorService, {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true,
  }],
  exports: [HttpClientModule,
    ToastrModule]
})
export class CoreModule { }
