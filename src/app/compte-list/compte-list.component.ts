import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import {CompteService} from "../service/compte-service.service";
import {AuthService} from "../service/auth-service.service";
import {DatePipe} from "@angular/common";
import {ActivatedRoute, RouterOutlet} from "@angular/router";


@Component({
  selector: 'app-compte-list',
  templateUrl: './compte-list.component.html',
  standalone: true,
  imports: [
    DatePipe,
    RouterOutlet
  ],
  styleUrls: ['./compte-list.component.scss']
})
export class CompteListComponent implements OnInit {
  comptes: any[] = [];
  idUsser:any

  constructor(private compteService: CompteService,private route:ActivatedRoute) { }

  ngOnInit(): void {
   this.idUsser=this.route.snapshot.paramMap.get('id')
    this.compteService.getAllAccounts(this.idUsser).subscribe(value=>{
      this.comptes=value
    });
  }


}
