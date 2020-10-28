import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Material modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';



//Local
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LightSwitchComponent } from './widgets/light-switch/light-switch.component';
import { ColorPickerSwitchComponent } from './widgets/color-picker-switch/color-picker-switch.component';
import { ThermoComponent } from './widgets/thermo/thermo.component';
import { HomeComponent } from './panels/home/home.component';
import { AboutComponent } from './panels/about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    LightSwitchComponent,
    ColorPickerSwitchComponent,
    ThermoComponent,
    HomeComponent,
    AboutComponent
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
    MatSliderModule,
  ],
  
  entryComponents: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
