import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { ROUTES_PATH } from '../models/const';
import { StorageService } from '../services/storage/storage.service';

@Injectable()
export class NotAuthorizedGuard implements CanActivate {
  constructor(
    private router: Router,
    private storage: StorageService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.storage.isAuthenticated()) {
      this.router.navigate([ROUTES_PATH.List]);
      return false;
    }

    return true;
  }
}
