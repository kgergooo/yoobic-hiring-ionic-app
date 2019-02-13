import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { SessionStorageService } from '../services/session-storage/session-storage.service';
import { ROUTES_PATH } from '../models/const';

@Injectable()
export class AuthorizedGuard implements CanActivate {
  constructor(
    private router: Router,
    private sessionStorage: SessionStorageService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.sessionStorage.isAuthenticated()) {
      this.router.navigate([ROUTES_PATH.Login]);
      return false;
    }

    return true;
  }
}
