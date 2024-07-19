import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {CompteListComponent} from "./compte-list/compte-list.component";

export const routes: Routes = [
  { path: 'comptes/:id', component: CompteListComponent},
  //{ path: 'save', component: CompteFormComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  //{ path: '', redirectTo: '/comptes', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
