import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent  implements OnInit {
  user = {
    name: '',
    avatar: '',
    level: {
      levelName: '',
      levelColor: '', 
    }
  };
  

  constructor() {
    
   }

  ngOnInit() {
    this.user.name = 'Leonardo Santos'
    this.user.level = {
      levelName: 'Nível Roxo',
      levelColor: '#6A36E8', 
    }
  }

}
