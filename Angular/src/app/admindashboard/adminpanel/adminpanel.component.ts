import { Component } from '@angular/core';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent {

  toggle?:boolean=false;

  categorybtn()
  {
      this.toggle=true;
  }

  productbtn()
  {
    this.toggle=false;

  }

}
