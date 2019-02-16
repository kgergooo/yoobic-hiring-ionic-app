import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DemoWebComponentPage } from './demo-web-component.page';
import { AuthorizedGuard } from 'src/app/shared/guards/auth-guard';

const routes: Routes = [
  {
    path: '',
    component: DemoWebComponentPage,
    canActivate: [AuthorizedGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DemoWebComponentPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DemoWebComponentPageModule {}
