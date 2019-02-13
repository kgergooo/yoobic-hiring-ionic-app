import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './shared/services/authentication/auth.service';
import { Router } from '@angular/router';
import { ROUTES_PATH } from './shared/models/const';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean = false;

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
    this.authService.loggedInSubject.subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = isLoggedIn;
      console.log('this.isLoggedIn ', this.isLoggedIn);
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
}
