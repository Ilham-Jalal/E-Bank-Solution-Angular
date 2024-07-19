import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../service/auth-service.service";
import {Router, RouterOutlet} from "@angular/router";
import {SignUpRequest} from "../model/SignUpRequest";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterOutlet
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const signUpRequest: SignUpRequest = this.signupForm.value as SignUpRequest;
      this.authService.singup(signUpRequest).subscribe({
        next: (response: any) => {
          console.log('Registration successful:', response);
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  }
}
