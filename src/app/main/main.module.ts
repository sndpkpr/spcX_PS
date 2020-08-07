import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../lib/shared/shared.module';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { InfoPageComponent } from './info-page/info-page.component';
// import { CoreModule } from '../lib/core/core.module';
import { ApiService } from '../lib/core/services/api-service/api.service';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FiltersComponent } from './filters/filters.component';
import { CardsComponent } from './cards/cards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MainComponent, InfoPageComponent, FiltersComponent, CardsComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [ApiService]
})
export class MainModule { }
