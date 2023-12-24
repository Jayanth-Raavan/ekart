import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecart';

  handleSidebar(event: any) {
    console.log("jhbhjj", event)
  }
  data = "jayanth";
  fun(abcd:any){
    this.data=abcd;
  
  }
}
