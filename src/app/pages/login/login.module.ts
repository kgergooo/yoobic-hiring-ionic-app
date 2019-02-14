import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { LoginPage } from './login.page';
import { NotAuthorizedGuard } from 'src/app/shared/guards/not-auth-guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginPage,
        canActivate: [NotAuthorizedGuard]
      }
    ])
  ],
  declarations: [LoginPage]
})
export class LoginPageModule { }
