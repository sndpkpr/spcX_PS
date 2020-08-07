import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css', './checkbox.css']
})
export class FiltersComponent implements OnInit {

  @Input() hero;
  radioSelected = '2006';
  form: FormGroup
  fb: FormBuilder
  constructor(fb: FormBuilder) {
    if(this.hero) {
      console.log(this.hero.filter(word => word.checked === true));
    }
    this.form = fb.group({
      checkArray: ['2006']
    })
   }

  ngOnInit(): void {
  }

  checkValue(event) {
    console.log(event);
  }

  onCheckboxChange(e) {
    console.log(e)
    console.log(this.form.value)   
  }
}
