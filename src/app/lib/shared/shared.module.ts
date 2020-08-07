import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalHeaderComponent } from './components/global-header/global-header.component';
import { GlobalFooterComponent } from './components/global-footer/global-footer.component';



@NgModule({
  declarations: [GlobalHeaderComponent, GlobalFooterComponent],
  imports: [
    CommonModule
  ],
  exports: [GlobalHeaderComponent, GlobalFooterComponent]
})
export class SharedModule { }
