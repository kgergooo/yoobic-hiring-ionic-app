import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/authentication/auth.service';
import { ROUTES_PATH, EMAIL_PATTERN } from 'src/app/shared/models/const';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {

  loginFormGroup: FormGroup;
  readonly EMAIL: string = 'email';
  readonly PASSWORD: string = 'password';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    // Init form with validation
    this.loginFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(EMAIL_PATTERN)]),
      password: new FormControl('', [Validators.required])
    });
  }

  login() {
    // Mock login for test purpose
    if (this.authService.login(this.loginFormGroup.get(this.EMAIL).value, this.loginFormGroup.get(this.PASSWORD).value)) {
      this.router.navigate([ROUTES_PATH.List]);
    }
  }
}
