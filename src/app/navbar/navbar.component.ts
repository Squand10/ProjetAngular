import { Component, ViewChild } from '@angular/core';
import { DrawerService } from './drawer.service';
import { MatDrawer } from "@angular/material";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

  @ViewChild('drawer') public drawer: MatDrawer;

  constructor(private drawerService: DrawerService) {	}

  ngOnInit(): void {
    this.drawerService.setDrawer(this.drawer);
  }

}
