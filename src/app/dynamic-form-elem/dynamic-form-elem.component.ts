import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-elem',
  templateUrl: './dynamic-form-elem.component.html',
  styleUrls: ['./dynamic-form-elem.component.css']
})
export class DynamicFormElemComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {

  }
  ngOnInit() {
    this.creatFormElem()
  }

  creatFormElem(){
    this.form = this.fb.group({
      'level1': this.fb.array([
        this.initLevel1()
      ])
    });
  }

  initLevel1() {
    return this.fb.group({
      'level2': this.fb.array([
        this.initLevel2()
      ])
    });
  }

  initLevel2() {
    return this.fb.group({
      'level2_1': ['Level 2 - Item 1'],
      'level2_2': ['Level 2 - Item 2'],
      'level2_3': ['Level 2 - Item 3']
    })
  }

  addLevel1Item() {
    const control = <FormArray>this.form.controls['level1'];
    control.push(this.initLevel1());
  }

  addLevel2Item(i) {
    const control = (<FormArray>this.form.controls['level1']).at(i).get('level2') as FormArray;
    control.push(this.initLevel2());
  }  

}