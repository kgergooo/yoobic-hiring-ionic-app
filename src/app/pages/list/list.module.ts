import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ListPage } from './list.page';
import { AuthorizedGuard } from 'src/app/shared/guards/auth-guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage,
        canActivate: [AuthorizedGuard]
      }
    ])
  ],
  declarations: [ListPage]
})
export class ListPageModule { }
