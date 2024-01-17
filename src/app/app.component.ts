import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userData = {};
  constructor(private cdr: ChangeDetectorRef) {
  }
  ngOnInit() {
    this.cdr.detectChanges();
  }
}
