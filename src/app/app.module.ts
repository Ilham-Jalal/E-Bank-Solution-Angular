import {BrowserModule, provideClientHydration} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'; // Assurez-vous d'importer HttpClientModule
import { AppComponent } from './app.component';
import { CompteListComponent } from './compte-list/compte-list.component';
import {CompteService} from "./service/compte-service.service";
import {CommonModule} from "@angular/common";
import {AuthService} from "./service/auth-service.service";
import {LoginComponent} from "./login/login.component";
import {AppRoutingModule} from "./app.routes";
import {AuthInterceptor} from "./service/auth-interceptor";


@NgModule({
  declarations: [

  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppComponent,
    CommonModule,
    AppRoutingModule,
    CompteListComponent,
    LoginComponent,
  ],
  providers:[
    AuthInterceptor
      ],

  bootstrap: []
})
export class AppModule { }
