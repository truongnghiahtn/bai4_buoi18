import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4SmartphoneItem2Component } from './baitap4-smartphone-item2.component';

describe('Baitap4SmartphoneItem2Component', () => {
  let component: Baitap4SmartphoneItem2Component;
  let fixture: ComponentFixture<Baitap4SmartphoneItem2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4SmartphoneItem2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4SmartphoneItem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
