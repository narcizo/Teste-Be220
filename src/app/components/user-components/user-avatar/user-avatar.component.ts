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
      avatarImg : 'https://i.pravatar.cc/100?img=14',
      level : {
        levelName: 'Nível Roxo',
        levelColor: '#6A36E8',
      }
    };
   }

  ngOnInit() {
  }

}
