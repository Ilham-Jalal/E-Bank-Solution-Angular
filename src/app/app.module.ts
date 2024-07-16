import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CompteComponent } from './compte-list/compte-list.component';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CompteComponent,
    AppComponent,
    // Ensure HttpClientModule is imported here
  ],
  providers: [],
})
export class AppModule { }
