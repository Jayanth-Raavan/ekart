import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
@Input () showSidebar:boolean=false;
@Output () sidebarEvent = new EventEmitter<boolean>();

handleSidebar(){
  this.sidebarEvent.emit(false)
}
ngDoCheck(){
  console.log("DFGHJK",this.showSidebar)
}
}
