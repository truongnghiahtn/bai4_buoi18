import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4SmartphoneItem1Component } from './baitap4-smartphone-item1.component';

describe('Baitap4SmartphoneItem1Component', () => {
  let component: Baitap4SmartphoneItem1Component;
  let fixture: ComponentFixture<Baitap4SmartphoneItem1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4SmartphoneItem1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4SmartphoneItem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
