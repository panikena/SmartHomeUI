import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { OnInit } from '@angular/core';
import { WebSocketService } from './web-socket.service';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';

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
  displayName : string;
  
  public command : string = null;

  mobileQuery: MediaQueryList;

  menuItems : any[] =  [{ link : "/home", img : "assets/home.svg", name : "Home"}, { link : "/about", img : "assets/information.svg", name : "About"}]

  private _mobileQueryListener: () => void;

  constructor(private changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private webSocketService : WebSocketService, private router : Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => {
      changeDetectorRef.detectChanges();
    }
    this.mobileQuery.addListener(this._mobileQueryListener);
    
    webSocketService.onOpen.subscribe(e =>{
      this.changeDetectorRef.detectChanges();
    })


    this.router.navigate(["./home"]);

    if(this.isLoggedIn)
    {
      this.webSocketService.init();
    }
  } 
  sendCommand(){
    console.log("======cmd===== "+ this.command)
    this.webSocketService.send(this.command)
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.webSocketService.onOpen.unsubscribe()
    this.webSocketService.onMessage.unsubscribe()
    this.changeDetectorRef.detach();
  }

  toggleMenu(){
    this.sideNavMenu.toggle()
    this.changeDetectorRef.detectChanges();
  }

  onMenuItemClick()
  {
    //hide only for mobile version
    if(this.mobileQuery.matches)
    {
      this.sideNavMenu.close()
    }   
  }

  signIn() {
    if (this.name != null && this.password != null) {
      this.isLoggedIn = true;
      this.wrongPassword = false;
      this.displayName = this.name;
      this.name = this.password = null;
      this.webSocketService.init();
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