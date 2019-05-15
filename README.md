# Dynamic Form Element Generator (Array and Elements)
Dynamic form Element generator based on angular 6. It adds the form elements on run time in Responsive driven form environment.

ADD LEVEL 1 -> It will add an outer FormArray set to form elements
ADD LEVEL 2 -> It will add an inner FormArray set to form elements

It dynamically generates the form elements that can be editable and updated Form values can be sent to API further.

![alt text](img/dynamicRow.jpg)


## Demo
You may want to have a look at the demo https://github-mjigiu.stackblitz.io

## Adding the component in your project
```
<app-dynamic-form-elem></app-dynamic-form-elem>
```

### dynamic-form-elem.component.ts
``` typescript
...
...
...

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
```

### dynamic-form-elem.component.html
``` typescript

...
...
<form [formGroup]="form">
  <!------------- level 1 -------->
  <div formArrayName="level1">
    
      <div *ngFor="let item of form['controls'].level1['controls']; let i=index">
        <div formGroupName="{{i}}" class="level1">
          <!------------- level 2 -------->
          <div formArrayName="level2">
            <div *ngFor="let Y of item['controls'].level2['controls']; let j=index">
              <div formGroupName="{{j}}" class="level2">
                <div class="sub-level"><input type="text" formControlName="level2_1"></div>
                <div class="sub-level"><input type="text" formControlName="level2_2"></div>
                <div class="sub-level"><input type="text" formControlName="level2_3"></div>
              </div>
            </div>
            <input type="button" (click)="addLevel2Item(i)" value="ADD Level 2">
          </div>
          <!------------- /. level 2 -------->
        </div>
      </div>        
    <input type="button" (click)="addLevel1Item()" value="ADD Level 1" class='floatRight'>
  </div>
  <!------------- /. level 1 -------->
</form> 
<pre style="font-size:15px">{{ form.value | json }}</pre>

```


