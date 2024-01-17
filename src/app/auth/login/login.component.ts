import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  users: any[] = [];
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private toastr: ToastrService, private cdr: ChangeDetectorRef) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });

  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log("erfer", this.loginForm?.value)
      this.auth.getUsers().subscribe((res: any) => {
        this.users = res;
        if (this.users) {
          let result = this.findUser(this.loginForm?.value);
          console.log("objectdata", result)
          if (result) {
            const resultdata = JSON.stringify(result);
            localStorage.setItem('userData', resultdata);
            this.router.navigate(['/'])
            this.toastr.success('login success');
            this.cdr.detectChanges();
          }
          else {
            this.toastr.error('user does not exists');

          }
        }
      })
    }
    else {
      this.loginForm.markAllAsTouched()
    }
  }
  findUser(credentials: { email?: string, mobile?: string, password: string }) {
    if (credentials.email) {
      return this.users.find(user => user.email === credentials.email && user.password === credentials.password);
    } else if (credentials.mobile) {
      return this.users.find(user => user.mobile === credentials.mobile && user.password === credentials.password);
    }
    return null;
  }

}
