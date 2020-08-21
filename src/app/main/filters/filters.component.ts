import { Component, Input, OnInit } from '@angular/core';
import { Filter } from '../info-page/const/view-models/filter';
import { MainServiceService } from '../services/main-service.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css', './checkbox.css']
})
export class FiltersComponent implements OnInit {
  @Input() filter: Filter;
  constructor(private mainServiceService: MainServiceService) {}

  ngOnInit(): void {
    this.setFilterInit();
  }

  private setFilterInit(): void {
    const checkedFiler = this.mainServiceService.getQueryParms()[this.filter?.code_name];
    if (checkedFiler) {
      this.filter.arrdata.map(x => { x.checked = x.value === checkedFiler ? true : false; });
    }
  }

  onCheckboxChange(val, filterName): void {
    const me = Object.create({});
    this.filter.arrdata.map( x => { x.checked = (val === x.value) ?  true : false; });
    me[filterName] = val;
    this.mainServiceService.setQueryParams(me);
  }
}
