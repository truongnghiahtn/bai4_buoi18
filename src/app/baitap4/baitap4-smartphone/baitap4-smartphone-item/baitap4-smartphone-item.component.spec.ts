import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4SmartphoneItemComponent } from './baitap4-smartphone-item.component';

describe('Baitap4SmartphoneItemComponent', () => {
  let component: Baitap4SmartphoneItemComponent;
  let fixture: ComponentFixture<Baitap4SmartphoneItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4SmartphoneItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4SmartphoneItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
