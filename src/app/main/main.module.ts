import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../lib/shared/shared.module';
import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from './main.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { FiltersComponent } from './filters/filters.component';
import { CardsComponent } from './cards/cards.component';
import { CoreModule } from '../lib/core/core.module';
import { MainServiceService } from './services/main-service.service';

@NgModule({
  declarations: [MainComponent, InfoPageComponent, FiltersComponent, CardsComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    CoreModule
  ],
  providers: [MainServiceService]
})
export class MainModule { }
