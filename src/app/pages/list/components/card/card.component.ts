import { Component, Input } from '@angular/core';
import { Album } from 'src/app/shared/models/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() data: Album;
  @Input() isDetailedView: boolean;
}
