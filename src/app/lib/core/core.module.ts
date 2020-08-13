import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS, } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { ApiService, ErrorHandlerService, InterceptorService, NotificationService } from '../core/coreservice-index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ ApiService, ErrorHandlerService, NotificationService, InterceptorService, {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true,
  }],
  exports: [HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule]
})
export class CoreModule { }
