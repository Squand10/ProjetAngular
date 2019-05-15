import { Component } from '@angular/core';
import { SidenavService} from '../sidenav/sidenav.service';


@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent{


  constructor(private sidenav: SidenavService) { }


  toggleActive:boolean = false;

  toggleNav() {
    this.toggleActive = !this.toggleActive;
    this.sidenav.toggle();

    console.log('Clicked');
  }
}

