import { Component, Input } from '@angular/core';
import { Response } from '../info-page/const/view-models/lanuch_response';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() cards: Response[];
}
