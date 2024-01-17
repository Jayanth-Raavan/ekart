import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private data: any;
  public dataChanged$: Subject<any> = new Subject<any>();
  public dataReloaded$: Subject<any> = new Subject<any>();


  setData(data: any) {
    this.data = data;
    this.dataChanged$.next(this.data); // Emit the event when data changes
  }
  setReload(data: any) {
    this.dataReloaded$.next(data)
  }
  getData() {
    return this.data;
  }
}
