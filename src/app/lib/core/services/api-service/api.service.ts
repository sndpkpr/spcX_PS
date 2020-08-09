import { Injectable } from '@angular/core';
  import { HttpClient, HttpRequest, HttpParams, HttpHeaders } from '@angular/common/http';

import { ApiParams } from './view-model/api-params';
import { environment } from '../../../../../environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  // common get method for all http requests
  getData(url: string, reqAPIParams: ApiParams[] | null) {
    let newHTTPParams = new HttpParams();
    if (reqAPIParams != null) {
      reqAPIParams.forEach(element => {
        newHTTPParams = newHTTPParams.append(element.Key, element.Value);
      });
    }
    return this.http.get(this.getUrl(url), { params: newHTTPParams, observe: 'response' }).pipe(
      // catchError(this.handleError)
    );
  }

  // attach base url
  private getUrl(url: string): string {
    return this.isSecure(environment.isSecure) + environment.hostName + ":" + environment.port + environment.basePath + url ;
  }

  private isSecure(isSecure: boolean): string {
    return (environment.isSecure) ?  'https://'  : 'http://' ;
  }

  getToken(): string {
    const token =  null;
    return token;
  }
}
