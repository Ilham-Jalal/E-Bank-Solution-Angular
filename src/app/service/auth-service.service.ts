import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import {LoginRequest} from "../model/loginRequest";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8081/api/auth';
  private tokenKey = 'token';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  setToken(token: string):void{
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null{
    return localStorage.getItem(this.tokenKey);
  }

  clearToken(): void{
    localStorage.removeItem(this.tokenKey);
  }

  singup(loginRequest: LoginRequest): Observable<any> {
    // @ts-ignore
    return this.http.post<any>(`${this.apiUrl}/signup`, loginRequest, { responseType: 'text' })
  }

  login(loginRequest: LoginRequest): Observable<any> {
    // @ts-ignore
    return this.http.post<any>(`${this.apiUrl}/login`, loginRequest, { responseType: 'text' })
  }
}
