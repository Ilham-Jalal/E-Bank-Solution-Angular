import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { routes } from './app.routes';
import {HttpInterceptor} from "./service/auth-interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([HttpInterceptor])),
    importProvidersFrom(FormsModule)
  ]
};
