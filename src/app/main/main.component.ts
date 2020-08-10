import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: '<app-global-header></app-global-header><router-outlet></router-outlet><app-global-footer></app-global-footer>'
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
