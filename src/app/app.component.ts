import { Component, ViewChild, OnInit } from '@angular/core';
import { DrawerService } from './navbar/drawer.service';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-Project';

  @ViewChild('drawer') public drawer: MatDrawer;

  constructor(private drawerService: DrawerService) {	}

  ngOnInit(): void {
    this.drawerService.setDrawer(this.drawer);
  }
}
