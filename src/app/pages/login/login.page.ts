import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/authentication/auth.service';
import { ROUTES_PATH } from 'src/app/shared/models/const';

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
