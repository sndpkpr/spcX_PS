import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { InfoPageComponent } from './info-page/info-page.component';

const routes: Routes = [
  {
    path: 'info',
    component: MainComponent,
    children : [
      {
        path: '',
        component: InfoPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
