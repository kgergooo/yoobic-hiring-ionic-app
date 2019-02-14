import { Injectable } from '@angular/core';

declare var localStorage: Storage;
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly userKey: string = 'user';
  constructor() { }

  public setUser(userName: string) {
    // Should be saved a token from a server response si this is a MOCK login
    localStorage.setItem(this.userKey, userName);
  }

  public isAuthenticated(): boolean {
    return localStorage.getItem(this.userKey) ? true : false;
  }

  public clearUser() {
    localStorage.removeItem(this.userKey);
  }
}
