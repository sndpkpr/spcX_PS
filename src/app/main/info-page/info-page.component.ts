import { Component, OnDestroy } from '@angular/core';
import { Query } from './const/view-models/launch_query';
import { LaunchYear, LaunchSuccess, LandSuccess } from './const/data/static_filter';
import { MainServiceService } from '../services/main-service.service';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css']
})
export class InfoPageComponent implements OnDestroy {
  Response ;
  LaunchYear = LaunchYear; LaunchSuccess = LaunchSuccess; LandSuccess = LandSuccess;
  queryMade = false;
  launchQuery: Query;

  constructor(private mainServiceService: MainServiceService) {
    this.mainServiceService.isOpen$.subscribe( x => {
      this.queryMade = false;
      if (x) {
        this.Response = x;
        this.launchQuery = x.launchQuery;
      }
    });
    this.mainServiceService.isOpen2$.subscribe( x => {
      this.queryMade = true;
    });
  }

  ngOnDestroy(): void {
    this.mainServiceService.isOpen$.unsubscribe();
    this.mainServiceService.isOpen2$.unsubscribe();
  }
}
