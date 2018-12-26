import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Local
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//Material modules
import { MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatButtonModule, MatInputModule, MatButtonToggleModule} from '@angular/material';
import { LightSwitchComponent } from './widgets/light-switch/light-switch.component';


@NgModule({
  declarations: [
    AppComponent,
    LightSwitchComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatButtonToggleModule,
  ],
  
  entryComponents: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
