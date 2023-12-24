import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpForm: FormGroup;
  constructor(private fb : FormBuilder, private auth: AuthService){
    this.signUpForm = this.fb.group({
      firstName : new FormControl('', [Validators.required]),
      lastName : new FormControl('', [Validators.required]),
      mobile : new FormControl('', [Validators.required,Validators.minLength(10), Validators.maxLength(10)]),
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required]),
      confirmPassword : new FormControl('', [Validators.required]),
    },{
      validator: this.passwordMatchValidator
    })
  }
  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('confirmPassword');

    if (passwordControl && confirmPasswordControl && passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ passwordMismatch: true });
    } else {
      confirmPasswordControl.setErrors(null);
    }
  }
  onSubmit(){
    if(this.signUpForm.valid){
      console.log("Success", this.signUpForm?.value)
      this.auth.signUp(this.signUpForm?.value).subscribe((res:any)=>{
        console.log("HGHJ",res);
        if(res){
          
        }
      })
    }
    else{
    this.signUpForm.markAllAsTouched()
    }
  }
}
