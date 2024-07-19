import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompteBancaire } from '../model/CompteBancaire';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  private apiUrl = 'http://localhost:8081/compte/api';

  constructor(private http: HttpClient) {
  }

    getAllAccounts(userId:any): Observable<CompteBancaire[]> {
    return this.http.get<CompteBancaire[]>(`${this.apiUrl}/all/${userId}`);
  }

  getCompteById(id: number): Observable<CompteBancaire> {

    return this.http.get<CompteBancaire>(`${this.apiUrl}/${id}`);
  }

  saveAccount(userId: number, compteBancaire: CompteBancaire): Observable<CompteBancaire> {

    return this.http.post<CompteBancaire>(`${this.apiUrl}/save/${userId}`, compteBancaire);
  }

  closeAccount(id: number, reason: string): Observable<void> {

    return this.http.put<void>(`${this.apiUrl}/close/${id}`, reason, );
  }

  updateCompte(id: number, compteBancaire: CompteBancaire): Observable<CompteBancaire> {

    return this.http.put<CompteBancaire>(`${this.apiUrl}/update/${id}`, compteBancaire );
  }
}
