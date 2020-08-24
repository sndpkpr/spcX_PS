import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../../lib/core/services/api-service/api.service';
import { ApiParams } from '../../lib/core/services/api-service/view-model/api-params';
import { Query } from '../info-page/const/view-models/launch_query';
import { LaunchYear, LaunchSuccess, LandSuccess } from '../info-page/const/data/static_filter';

@Injectable()
export class MainServiceService {
  launchQuery: Query = {
    launch_success : LaunchSuccess.arrdata.find(word => word.checked === true)?.value,
    land_success: LandSuccess.arrdata.find(word => word.checked === true)?.value,
    launch_year: LaunchYear.arrdata.find(word => word.checked === true)?.value,
    limit: '100'
  };
  public isOpen$ = new BehaviorSubject<any>(undefined);
  public isOpen2$ = new BehaviorSubject<boolean>(true);
  constructor(private apiservice: ApiService, private route: ActivatedRoute, private router: Router) { }

  public setQueryParams(queryParams): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: 'merge'
    }).then(() => {
      this.getLaunchData();
    });
  }

  public getQueryParms(): Query {
    let paramsss;
    this.route.queryParams.subscribe(params => {
      paramsss = params;
    });
    this.launchQuery = JSON.parse(JSON.stringify({...this.launchQuery, ...paramsss}));
    return this.launchQuery;
  }

  private getLaunchData(): void {
    this.isOpen2$?.next(true);
    this.apiservice.getData('launches', this.convertToReqQuery()).subscribe( res => {
      this.isOpen2$?.next(false);
      if (res.ok) {
        const response = {
          body : res.body,
          launchQuery: this.launchQuery
        };
        this.isOpen$.next(response);
      }
    });
  }

  public getLaunchInitData(): any {
    return this.apiservice.getData('launches', this.convertToReqQuery());
  }

  private convertToReqQuery(): ApiParams[] {
    const launchQuery = this.getQueryParms();
    const t = [];
    for (const key in launchQuery) {
      if (Object.prototype.hasOwnProperty.call(launchQuery, key)) {
        const element = launchQuery[key];
        t.push({Key: key, Value: launchQuery[key]});
      }
    }
    return t;
  }
}
