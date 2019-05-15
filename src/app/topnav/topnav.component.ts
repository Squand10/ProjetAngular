import { Component } from '@angular/core';
import { DrawerService} from '../navbar/drawer.service';


@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent{


  constructor(private drawer: DrawerService) { }


  toggleActive:boolean = false;

  toggleNav() {
    this.toggleActive = !this.toggleActive;
    this.drawer.toggle();

    console.log('Clicked');
  }
}
