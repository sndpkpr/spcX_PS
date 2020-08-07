import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../lib/core/services/api-service/api.service';
import { response } from './const/view-models/lanuch_response';
import { query } from './const/view-models/launch_query';
import { LaunchYear, LaunchSuccess, LandSuccess } from './const/view-models/years';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css']
})
export class InfoPageComponent implements OnInit {
  LaunchYear = LaunchYear; LaunchSuccess = LaunchSuccess; LandSuccess = LandSuccess;
  launch_query : query = {
    launch_success: null,
    land_success: null,
    limit: 100,
  };
  lanuch_response : Array<response>;
  aa;

  form: FormGroup;
  constructor(private apiservice: ApiService,fb: FormBuilder) {

    this.form = fb.group({
      launch_year: [''],
      launch_success: [''],
      land_success: ['']
    });
  }
  
  ngOnInit(): void {
    console.log(this.launch_query)
    this.apiservice.getData('launches?limit=100&launch_success=true', null).subscribe( x=> {
      this.aa = x;
    })
  }
}
