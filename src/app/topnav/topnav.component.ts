import { Component, OnInit } from '@angular/core';
import {SidenavComponent} from "../sidenav/sidenav.component";


@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {


  constructor(private _side: SidenavComponent) { }


  toggle() {
    this._side.newFlag();
  }

  ngOnInit() {
  }

}
