import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MobileService } from 'src/app/service/mobile.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent {
  mobileForm: FormGroup;
  constructor(private fb: FormBuilder, private mobs: MobileService) {
    this.mobileForm = this.fb.group({
      mobileName: new FormControl("", [Validators.required]),
      model: new FormControl("", [Validators.required]),
      price: new FormControl("", [Validators.required]),
      effectivePrice: new FormControl("", [Validators.required]),
      features: new FormControl("", [Validators.required]),
      imgURL: new FormControl("", [Validators.required]),
    });
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
}
