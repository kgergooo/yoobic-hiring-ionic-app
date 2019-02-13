import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { ROUTES_PATH } from '../models/const';
import { SessionStorageService } from '../services/session-storage/session-storage.service';

@Injectable()
export class NotAuthorizedGuard implements CanActivate {
  constructor(
    private router: Router,
    private sessionStorage: SessionStorageService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.sessionStorage.isAuthenticated()) {
      this.router.navigate([ROUTES_PATH.List]);
      return false;
    }

    return true;
  }
}
