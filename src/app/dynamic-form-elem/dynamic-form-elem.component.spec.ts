import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormElemComponent } from './dynamic-form-elem.component';

describe('DynamicFormElemComponent', () => {
  let component: DynamicFormElemComponent;
  let fixture: ComponentFixture<DynamicFormElemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormElemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
