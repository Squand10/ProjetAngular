import { Component, ViewChild, OnInit } from '@angular/core';
import { SidenavService } from './navbar/sidenav.service';
import { MatSidenav } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-Project';

  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(private sidenavService: SidenavService) {	}

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }
}
