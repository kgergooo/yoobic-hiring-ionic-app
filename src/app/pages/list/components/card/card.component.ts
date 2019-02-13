import { Component, OnInit, Input } from '@angular/core';
import { Album } from 'src/app/shared/models/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {
  @Input() data: Album;
}
