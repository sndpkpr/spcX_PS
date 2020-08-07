import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../lib/core/services/api-service/api.service';
import { response } from './const/view-models/lanuch_response';
import { query } from './const/view-models/launch_query';
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
  launch_query : query = {
    launch_success : LaunchSuccess.arrdata.find(word => word.checked === true).value,
    land_success: LandSuccess.arrdata.find(word => word.checked === true).value,
    launch_year: LaunchYear.arrdata.find(word => word.checked === true).value,
    limit: '100'
  };

  form: FormGroup;
  constructor(private apiservice: ApiService,fb: FormBuilder) {
  }
  
  ngOnInit(): void {
    this.getMissions();
  }

  getMissions() {
    this.apiservice.getData('launches', this.convertToReqQuery(this.launch_query)).subscribe( res => {
      if(res.ok) {
        const Response = res.body;
        this.Response = Response;
      } else {

      }
    })
  }

  convertToReqQuery(launch_query): ApiParams[] {
    return launch_query = [
      { Key: "launch_success",  Value: launch_query.launch_success },
      { Key: "land_success", Value: launch_query.land_success },
      { Key: "launch_year", Value: launch_query.launch_year },
      { Key: "limit", Value: launch_query.limit }
    ];
  }

  updateQuery(event): void {
    const key = Object.keys(event)[0];
    this.launch_query[key] = event[key];
    this.getMissions()
  }
}
