import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() disaplaySidebar: boolean = false;
  @Output() sidebar = new EventEmitter<boolean>();
  userData = {};
  data = false;
  constructor() {
  }
  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
  }
  handlemenu() {
    this.data = true;
  }
  handleSidebar(event: any) {
    this.data = event;
  }
}
