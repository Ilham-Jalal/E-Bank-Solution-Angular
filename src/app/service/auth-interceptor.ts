import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest
} from '@angular/common/http';


export const HttpInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
) => {
  console.log("Interceptor invoked");
  let cloned = req;

  //let token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWxtYSIsImV4cCI6MTcyMTQwNTAwOX0.vBrE6ImOnF6LI7kGMd9nWD70oL_wofQsgKUxTGZmeJo';

  let token = localStorage.getItem('jwt') || '';


  if (token) {
     cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });


  }
  return next(cloned);
}
