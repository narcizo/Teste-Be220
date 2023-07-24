import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/interfaces/IUser';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent  implements OnInit {
  user: IUser;

  constructor() {
    this.user = {
      name : 'Leonardo Santos',
      avatarImg : '',
      level : {
        levelName: 'Nível Roxo',
        levelColor: '#6A36E8',
      }
    };
   }

  ngOnInit() {
  }

}
