import { state } from '@angular/animations';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MobileService } from 'src/app/service/mobile.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  mobileForm: FormGroup;
  Mobiles: any;
  editData: any;
  @ViewChild('staticBackdrop') modal: ElementRef;
  constructor(private fb: FormBuilder, private mobs: MobileService, private router: Router, private renderer: Renderer2) {
    this.mobileForm = this.fb.group({
      mobileName: new FormControl(this.editData?.mobileName, [Validators.required]),
      model: new FormControl(this.editData?.model, [Validators.required]),
      price: new FormControl(this.editData?.price, [Validators.required]),
      effectivePrice: new FormControl(this.editData?.effectivePrice, [Validators.required]),
      features: new FormControl(this.editData?.features, [Validators.required]),
      imgURL: new FormControl(this.editData?.imgURL, [Validators.required]),
    });
    if (history?.state) {
      this.editData = history.state;
      // const input = document.getElementById('staticBackdrop');
      // input?.click();
    }
  }
  openModal() {
    this.renderer?.addClass(this.modal?.nativeElement, 'show');
  }

  closeModal() {
    this.renderer?.removeClass(this.modal?.nativeElement, 'show');
  }

  ngOnInit() {
    this.GetMobiles();
  }
  GetMobiles() {
    this.mobs.GetAllMobiles().subscribe((res: any) => {
      this.Mobiles = res;
    })
  }
  onSubmit() {
    if (this.mobileForm?.valid) {
      this.mobs.AddMobile(this.mobileForm?.value).subscribe((res: any) => {
        console.log(`MOBILE`, res);
      })
    } else {
      this.mobileForm.markAllAsTouched();
    }
  }
  GetMobileById(id: number) {
    this.mobs.GetMobileById(id).subscribe((res: any) => {
      this.router.navigate([`mobile/${id}`], { state: res });
    })
  }
}
