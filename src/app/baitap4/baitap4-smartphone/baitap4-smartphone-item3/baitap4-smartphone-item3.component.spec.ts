import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4SmartphoneItem3Component } from './baitap4-smartphone-item3.component';

describe('Baitap4SmartphoneItem3Component', () => {
  let component: Baitap4SmartphoneItem3Component;
  let fixture: ComponentFixture<Baitap4SmartphoneItem3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4SmartphoneItem3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4SmartphoneItem3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
