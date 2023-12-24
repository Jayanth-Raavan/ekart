import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MobileService {
url="http://localhost:3000/mobiles";
  constructor(private http: HttpClient) { }

  getAllMobiles(){
    return this.http.get(this.url);
  }

}
