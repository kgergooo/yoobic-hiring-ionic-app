import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { StorageService } from '../services/storage/storage.service';
import { ROUTES_PATH } from '../models/const';

@Injectable()
export class AuthorizedGuard implements CanActivate {
  constructor(
    private router: Router,
    private storage: StorageService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.storage.isAuthenticated()) {
      this.router.navigate([ROUTES_PATH.Login]);
      return false;
    }

    return true;
  }
}
