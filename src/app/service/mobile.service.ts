import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MobileService {
  url = "http://localhost:3000/electronics/mobiles";
  constructor(private http: HttpClient) { }

  GetAllMobiles() {
    return this.http.get(this.url);
  }
  GetMobileById(id: number) {
    return this.http.get(this.url + `/${id}`);
  }
  AddMobile(payload: any) {
    return this.http.post(this.url, payload);
  }
  UpdateMobile(payload: any) {
    return this.http.get(this.url + `/${payload?.id}`, payload);
  }
  DeleteMobile(id: number) {
    return this.http.get(this.url + `/${id}`);
  }
}
