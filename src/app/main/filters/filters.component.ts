import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css', './checkbox.css']
})
export class FiltersComponent implements OnInit {

  @Input() filter: {name: string; code_name: string; arrdata: [{ val: string; checked: boolean; name: string; value: string}]};
  @Output() valueChange = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onCheckboxChange(val, filterName): void {
    const me = Object.create({});
    this.filter.arrdata.map( x => {
      x.checked = (val === x.value) ?  true : false ;
    });
    me[filterName] = val;
    this.valueChange.emit(me);
  }
}
