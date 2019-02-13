import { Component, OnInit, OnDestroy } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './shared/services/authentication/auth.service';
import { Router } from '@angular/router';
import { ROUTES_PATH } from './shared/models/const';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean = false;
  subscription: Subscription;

  public appPages = [
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
    // TODO: Should be implemented
    // {
    //   title: 'Chat',
    //   url: '/chat',
    //   icon: 'chat'
    // }
  ];

  constructor(
    public authService: AuthService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private router: Router,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.authService.loggedInSubject.next(this.authService.isLoggedIn());
  }

  ngOnInit(): void {
    this.subscription = this.authService.loggedInSubject.subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logOut() {
    this.authService.logout();
    this.router.navigate([ROUTES_PATH.Login]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
