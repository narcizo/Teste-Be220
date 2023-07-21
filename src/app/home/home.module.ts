import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { MenuComponent } from '../components/menu/menu.component';
import { NotificationComponent } from '../components/notification/notification.component';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';

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
  ]
})
export class HomePageModule {}
