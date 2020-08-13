import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css', './checkbox.css']
})
export class FiltersComponent implements OnInit {

  @Input() filter: {name: string; code_name: string; arrdata: [{ val: string; checked: boolean; name: string; value: string}]};
  @Output() valueChange = new EventEmitter();
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.createForm(fb);
  }

  ngOnInit(): void {
    this.findChecked();
  }

  findChecked(): void {
    if (this.filter) {
      const result = this.filter.arrdata.find(word => word.checked === true);
      this.setFormInit(result);
    }
  }

  setFormInit(result): void {
    this.form.controls.checkArray.setValue(result.value);
  }

  createForm(fb): void {
    this.form = fb.group({
      checkArray: []
    });
  }

  onCheckboxChange(val, filterName): void {
    const me = Object.create({});
    me[filterName] = val;
    this.valueChange.emit(me);
  }
}
