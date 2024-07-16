import { Routes } from '@angular/router';
import {CompteComponent} from "./compte-list/compte-list.component";

export const routes: Routes = [

  { path: 'comptes', component: CompteComponent },
  { path: '', redirectTo: '/comptes', pathMatch: 'full' },
];
