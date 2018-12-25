import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { OnInit } from '@angular/core';
import { WebSocketService } from './web-socket.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnDestroy {

  @ViewChild('snav') sideNavMenu : MatSidenav;

  title = 'Smarthome';

  isLoggedIn: boolean = true;
  wrongPassword: boolean;

  name: string;
  password: string;

  public command : string = null;

  message :string;

  mobileQuery: MediaQueryList;

  menuItems : any[] =  [{ link : ".", img : "http://lorempixel/40/40", name : "Home"}]

  private _mobileQueryListener: () => void;

  constructor(private changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private webSocketService : WebSocketService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    
    webSocketService.onMessage.subscribe(e => {
      this.message = e.data;
    })
  } 
  sendCommand(){
    console.log("======cmd===== "+ this.command)
    this.webSocketService.send(this.command)
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  toggleMenu(){
    this.sideNavMenu.toggle()
    this.changeDetectorRef.detectChanges();
  }

  signIn() {
    if (this.name != null && this.password != null) {
      this.isLoggedIn = true;
      this.wrongPassword = false;
      this.name = this.password = null
    }
    else {
      this.wrongPassword = true;
    }
    
  }

  signOut(){
    this.isLoggedIn = false;
    console.log("sign out---");
  }

}