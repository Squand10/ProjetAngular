import { Component, ViewChild, OnInit } from '@angular/core';
import { SidenavService } from './sidenav/sidenav.service';
import { SidenavComponent } from './sidenav/sidenav.component';
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
  }
}
