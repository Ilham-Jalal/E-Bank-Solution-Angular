// src/app/components/login/login.component.ts
import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {AuthService} from "../service/auth-service.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {LoginRequest} from "../model/loginRequest";
import {AuthResponse} from "../model/AuthResponse";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet
  ],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onSubmit() {
    if (this.loginForm.valid) {
      const loginRequest: LoginRequest = this.loginForm.value as LoginRequest;
      this.authService.login(loginRequest).subscribe(
        (response: any) => {
          console.log('Login successful:', response);
          localStorage.setItem('jwt', response);
          this.router.navigate(['/comptes/1']);


      })
    }
  }
}
