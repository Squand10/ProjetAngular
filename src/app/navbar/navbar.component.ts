import { Component, ViewChild } from '@angular/core';
import { SidenavService } from './sidenav.service';
import { MatSidenav } from "@angular/material";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(private sidenavService: SidenavService) {	}

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

}
