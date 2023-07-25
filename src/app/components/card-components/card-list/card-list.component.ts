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
    this.cards = [
      {
        title: '',
        caption: '',
        redirect: '',
        image: 'https://picsum.photos/id/237/256/144',
        isNewDrill: true,
      },
      {
        title: 'LEVANTAMENTO DE PESO',
        caption: 'CONTINUAR TREINANDO',
        redirect: '',
        image: 'https://picsum.photos/id/2/256/144',
        isNewDrill: false,
      },
      {
        title: 'YOGA',
        caption: '',
        redirect: '',
        image: 'https://picsum.photos/id/3/256/144',
        isNewDrill: false,
      },
    ]
  }

  ngOnInit() {
    //TODO pegar imagens daqui https://picsum.photos/v2/list
    
  }

}
