import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { MenuComponent } from '../components/toolbar-components/menu/menu.component';
import { NotificationComponent } from '../components/toolbar-components/notification/notification.component';
import { ToolbarComponent } from '../components/toolbar-components/toolbar/toolbar.component';

import { UserAvatarComponent } from '../components/user-components/user-avatar/user-avatar.component';
import { UserOptionsComponent } from '../components/user-components/user-options/user-options.component';
import { UserSummaryComponent } from '../components/user-components/user-summary/user-summary.component';

import { CardListComponent } from '../components/card-list/card-list.component'; 
import { CardComponent } from '../components/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage,
    MenuComponent,
    NotificationComponent,
    ToolbarComponent,
    UserAvatarComponent,
    UserOptionsComponent,
    UserSummaryComponent,
    CardListComponent,
    CardComponent,
  ]
})
export class HomePageModule {}
