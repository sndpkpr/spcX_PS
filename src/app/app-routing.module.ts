import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
// import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: LandingPageComponent
  // },
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren : () => import('./main/main.module').then(m => m.MainModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
