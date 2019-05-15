import './polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopnavComponent } from './topnav/topnav.component';
import { PrimaryComponent } from './primary/primary.component';
import { SecondaryComponent } from './secondary/secondary.component';
import {DemoMaterialModule} from './material-module';
import {DrawerService} from './navbar/drawer.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TopnavComponent,
    PrimaryComponent,
    SecondaryComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [DrawerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
