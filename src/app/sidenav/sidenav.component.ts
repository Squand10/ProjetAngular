import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public opened: boolean = true;

  constructor() { }

  newFlag() {
      this.opened = !this.opened;
      console.log(this.opened);
  }

  ngOnInit() {
  }


}
