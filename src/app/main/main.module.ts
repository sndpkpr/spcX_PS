import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../lib/shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MainComponent } from './main.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { FiltersComponent } from './filters/filters.component';
import { CardsComponent } from './cards/cards.component';

import { ApiService, ErrorHandlerService, InterceptorService, NotificationService } from '../lib/core/coreservice-index';

@NgModule({
  declarations: [MainComponent, InfoPageComponent, FiltersComponent, CardsComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [ApiService, {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true,
  }]
})
export class MainModule { }
