import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidenavComponent } from './sidenav.component';

@Injectable()
export class SidenavService {
  private sidenav: MatSidenav;

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }
  public toggle(): void {
    this.sidenav.toggle();
  }
}
