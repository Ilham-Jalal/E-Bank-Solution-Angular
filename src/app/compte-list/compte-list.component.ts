// src/app/components/compte/compte.component.ts
import { Component, OnInit } from '@angular/core';
import {CompteBancaire} from "../model/CompteBancaire";

import {CompteService} from "../service/compte-service.service";
import {DatePipe} from "@angular/common";


@Component({
  selector: 'app-compte',
  templateUrl: './compte-list.component.html',

  standalone: true,
  imports: [
    DatePipe
  ],
  styleUrls: ['./compte-list.component.scss']
})
export class CompteComponent implements OnInit {
  comptes: CompteBancaire[] = [];
  userId: number = 1;

  constructor(private compteService: CompteService) { }

  ngOnInit(): void {
    this.getAllAccounts();
  }

  getAllAccounts(): void {
    this.compteService.getAllAccounts(this.userId).subscribe(
      (data: CompteBancaire[]) => {
        this.comptes = data;
      },
      (error: any) => {
        console.error('Error fetching accounts:', error);
      }
    );
  }
}
