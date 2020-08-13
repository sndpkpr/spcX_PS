import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../lib/core/services/api-service/api.service';
import { Response } from './const/view-models/lanuch_response';
import { Query } from './const/view-models/launch_query';
import { LaunchYear, LaunchSuccess, LandSuccess } from './const/view-models/years';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ApiParams } from '../../lib/core/services/api-service/view-model/api-params';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css']
})
export class InfoPageComponent implements OnInit {
  Response ;
  LaunchYear = LaunchYear; LaunchSuccess = LaunchSuccess; LandSuccess = LandSuccess;
  launchQuery: Query = {
    launch_success : LaunchSuccess.arrdata.find(word => word.checked === true).value,
    land_success: LandSuccess.arrdata.find(word => word.checked === true).value,
    launch_year: LaunchYear.arrdata.find(word => word.checked === true).value,
    limit: '100'
  };

  form: FormGroup;
  constructor(private apiservice: ApiService, fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.getMissions();
  }

  getMissions(): void {
    this.apiservice.getData('launches', this.convertToReqQuery(this.launchQuery)).subscribe( res => {
      if (res.ok) {
        this.Response = res.body;
        this.Response.isDataPresent = this.Response.toString().length;
      } else {
      }
    });
  }

  convertToReqQuery(launchQuery): ApiParams[] {
    return launchQuery = [
      { Key: 'launch_success',  Value: launchQuery.launch_success },
      { Key: 'land_success', Value: launchQuery.land_success },
      { Key: 'launch_year', Value: launchQuery.launch_year },
      { Key: 'limit', Value: launchQuery.limit }
    ];
  }

  updateQuery(event): void {
    const key = Object.keys(event)[0];
    this.launchQuery[key] = event[key];
    this.getMissions();
  }
}
