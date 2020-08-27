import { Component, OnDestroy, OnInit } from '@angular/core';
import { Query } from './const/view-models/launch_query';
import { LaunchYear, LaunchSuccess, LandSuccess } from './const/data/static_filter';
import { MainServiceService } from '../services/main-service.service';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css']
})
export class InfoPageComponent implements OnDestroy, OnInit {
  Response ;
  LaunchYear = LaunchYear; LaunchSuccess = LaunchSuccess; LandSuccess = LandSuccess;
  queryMade = true;
  launchQuery: Query;

  constructor(private mainServiceService: MainServiceService) {}

  ngOnInit(): void {
    this.getInitData();
    this.subscribeLaunch();
    this.subscribeLaunchRunning();
  }

  private getInitData(): void {
    this.mainServiceService.getLaunchInitData().subscribe(x => {
      this.Response = x;
    });
  }
  private subscribeLaunch(): void {
    this.mainServiceService.isOpen$.subscribe( x => {
      if (x) {
        this.Response = x;
        this.launchQuery = x.launchQuery;
      }
    });
  }

  private subscribeLaunchRunning(): void {
    this.mainServiceService.isOpen2$.subscribe( x => {
      this.queryMade = x;
    });
  }

  ngOnDestroy(): void {
    this.mainServiceService.isOpen$.unsubscribe();
    this.mainServiceService.isOpen2$.unsubscribe();
  }
}
