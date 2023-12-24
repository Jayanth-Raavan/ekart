import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
@Input() disaplaySidebar:boolean=false;
@Output() sidebar = new EventEmitter<boolean>();
data = false;
  handlemenu(){
    this.data=true;

  }
  handleSidebar(event:any){
    this.data=event;
    console.log("WERTY",event)
  }

}
