import { Component, OnInit, ViewChild } from '@angular/core';
import { DrawerService} from '../navbar/drawer.service';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {


  @ViewChild('drawer') public drawer: MatDrawer;

  constructor(private drawerService: DrawerService) {	}

  ngOnInit(): void {
    this.drawerService.setDrawer(this.drawer);
  }

}
