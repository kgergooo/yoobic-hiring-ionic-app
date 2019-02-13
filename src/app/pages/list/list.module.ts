import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ListPage } from './list.page';
import { AuthorizedGuard } from 'src/app/shared/guards/auth-guard';
import { HttpService } from 'src/app/shared/services/http/http.service';
import { CardComponent } from './components/card/card.component';
import { ListDetailModalComponent } from './components/list-detail-modal/list-detail-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage,
        canActivate: [AuthorizedGuard]
      }
    ])
  ],
  declarations: [ListPage, CardComponent, ListDetailModalComponent],
  entryComponents: [ListDetailModalComponent],
  providers: [HttpService]
})
export class ListPageModule { }
