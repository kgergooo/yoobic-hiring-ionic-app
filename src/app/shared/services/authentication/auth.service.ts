import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Let everyone be notified if we are logged in or out
  public loggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private storageService: StorageService) { }

  isLoggedIn(): boolean {
    return this.storageService.isAuthenticated();
  }

  login(email: string, password: string): boolean {
    this.storageService.setUser(email);
    this.loggedInSubject.next(true);
    return true;
  }

  logout() {
    this.storageService.clearUser();
    this.loggedInSubject.next(false);
  }
}
