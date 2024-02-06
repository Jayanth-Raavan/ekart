import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent {
  mobileData: any = {};
  constructor(private router: Router) {
    if (history) {
      this.mobileData = history.state;
    }
  }
  onEdit(data: any) {
    this.router.navigate(['/mobiles'], { state: data })
  }

}
