import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent  implements OnInit {
  @Input() title:string = "";
  @Input() canAddNew:boolean = false;
  @Input() isNewFeature:boolean = false;

  constructor() { }

  ngOnInit(
    //TODO pegar imagens daqui https://picsum.photos/v2/list
  ) {}

}
