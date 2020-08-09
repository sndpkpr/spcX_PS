import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from '../api-service/api.service';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(public apiservice: ApiService) {}
  intercept(
    // tslint:disable-next-line:no-any
    req: HttpRequest<any>,
    next: HttpHandler
  // tslint:disable-next-line:no-any
  ): Observable<HttpEvent<any>> {
    if (req.body) {
      req.headers.append('Content-Type', 'application/json');
      req.headers.append('If-Modified-Since', 'Mon, 26 Jul 1997 05:00:00 GMT');
      req.headers.append('Cache-Control', 'no-cache');
      req.headers.append('Pragma', 'no-cache');
     }
     if (this.apiservice.getToken()) {
       req = req.clone({
         setHeaders: {
           Authorization: `Bearer ${this.apiservice.getToken()}`
         }
       });
     }

    return next.handle(req).pipe(tap(
      // tslint:disable-next-line:no-any
      (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // do stuff with response if you want
          // tslint:disable-next-line:no-unused-expression
        }
      },
      // tslint:disable-next-line:no-any
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
        }
      }
    ));
  }
}
