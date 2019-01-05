import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Local
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//Material modules
import { MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatButtonModule, MatInputModule, MatButtonToggleModule, MatSliderModule} from '@angular/material';
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
