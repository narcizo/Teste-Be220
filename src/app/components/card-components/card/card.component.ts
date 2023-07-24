import { Component, Input, OnInit } from '@angular/core';
import { ICard } from 'src/app/model/interfaces/ICard';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {
  @Input() card!: ICard;

  constructor() { }

  ngOnInit() {}

}
