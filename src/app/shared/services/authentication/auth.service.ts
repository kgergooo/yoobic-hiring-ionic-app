import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SessionStorageService } from '../session-storage/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Let everyone be notified if we are logged in or out
  public loggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private sessionStorageService: SessionStorageService) { }

  isLoggedIn(): boolean {
    return this.sessionStorageService.isAuthenticated();
  }

  login(email: string, password: string): boolean {
    this.sessionStorageService.setUser(email);
    this.loggedInSubject.next(true);
    return true;
  }

  logout() {
    this.sessionStorageService.clearUser();
    this.loggedInSubject.next(false);
  }
}
