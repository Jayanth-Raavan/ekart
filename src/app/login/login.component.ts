import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  users : any[]=[];
  constructor(private fb : FormBuilder,private auth : AuthService, private router: Router ){
    this.loginForm = this.fb.group({
      email : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required]),
    })
  }

  onSubmit(){
    if(this.loginForm.valid){
      console.log("erfer",this.loginForm?.value)
      this.auth.getUsers().subscribe((res:any)=>{
        this.users = res;
        if(this.users){
          let result = this.findUser(this.loginForm?.value);
          if(result){
            this.router.navigate(['/dashboard'])
          }
        }
      })
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