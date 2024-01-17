import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() showSidebar: boolean = false;
  @Output() sidebarEvent = new EventEmitter<boolean>();
  constructor(private router: Router, private cdr: ChangeDetectorRef) {

  }
  handleSidebar() {
    this.sidebarEvent.emit(false)
  }
  hanldeLogOut() {
    localStorage.removeItem("userData");
    this.router.navigate(["/login"]);
    this.cdr.detectChanges();
  }
}
