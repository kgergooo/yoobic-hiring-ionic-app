import { Component } from '@angular/core';
import { SessionStorageService } from '../shared/services/session-storage/session-storage.service';
import { Router } from '@angular/router';
import { ROUTES_PATH } from '../shared/models/const';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../shared/services/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  loginFormGroup: FormGroup;

  readonly EMAIL: string = 'email';
  readonly PASSWORD: string = 'password';

  constructor(
    public authService: AuthService,
    private router: Router) {

  }

  login() {
    // Mock login for test purpose
    if (this.authService.login('email', '')) {
      this.router.navigate([ROUTES_PATH.List]);
    }
  }
}
