import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { fromEvent, startWith, map } from 'rxjs';
import { Dropdown,Carousel} from 'bootstrap'
// import '../../assets/Images/'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  @Input() inputdata:string;
  @Output() value=new EventEmitter<string>();
changefun(){
  this.value.emit(this.inputvar)
}
   inputvar="";
  //  ngDoCheck(){
  //   console.log("DFGHJKWERTY",this.inputvar )
  //  }
  user = JSON.parse(localStorage.getItem('userData'));
  userName = this.user?.firstName;


  @ViewChildren('item') items:any
  @ViewChildren('indicator') indicators:any
  
  @ViewChild('carousel',{static:true}) carousel!:any
  toggle(modalElement:any){
    const modal=new Dropdown(modalElement);
    modal.toggle();
  }
  change$:any | number

  carousels:any=[1,2,3,4,5,6,7].map(x=>({
    imageUrl:`../../assets/Images/carousel${x}.jpg`,
    buttons:[{title:"one"},{title:"two"},{title:"three"}]
  }))

  
  ngOnInit(){
    setTimeout(()=>{
      this.items.first.nativeElement.classList.add("active")
      this.indicators.first.nativeElement.classList.add("active")
      this.change$=fromEvent(this.carousel.nativeElement,'slid.bs.carousel').pipe(
         startWith({to:0}),
         map((res:any)=>res.to))
    },500)
  }
}
