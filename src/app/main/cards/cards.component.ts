import { Component, Input, PLATFORM_ID, Inject } from '@angular/core';
import { Response } from '../info-page/const/view-models/lanuch_response';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() cards: Response[];
  isBrowser: boolean;
  constructor(@Inject(PLATFORM_ID) platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
}
