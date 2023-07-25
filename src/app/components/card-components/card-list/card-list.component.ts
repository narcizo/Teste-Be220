import { Component, OnInit, Input } from '@angular/core';
import { ICard } from 'src/app/model/interfaces/ICard';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent  implements OnInit {
  @Input() title:string = "";
  @Input() canAddNew:boolean = false;
  @Input() isNewFeature:boolean = false;

  cards:ICard[];

  constructor() { 
    let id = 10;
    this.cards = [
      {
        title: '',
        caption: '',
        redirect: '',
        image: `https://picsum.photos/id/1077/256/144`,
        isNewDrill: true,
      },
      {
        title: 'LEVANTAMENTO DE PESO',
        caption: 'CONTINUAR TREINANDO',
        redirect: '',
        image: 'https://picsum.photos/id/491/256/144',
        isNewDrill: false,
      },
      {
        title: 'NATAÇÃO',
        caption: '',
        redirect: '',
        image: 'https://picsum.photos/id/841/256/144',
        isNewDrill: false,
      },
    ]
  }

  ngOnInit() {  }

}
