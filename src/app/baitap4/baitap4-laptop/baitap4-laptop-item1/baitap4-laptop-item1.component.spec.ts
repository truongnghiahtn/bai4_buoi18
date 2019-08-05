import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4LaptopItem1Component } from './baitap4-laptop-item1.component';

describe('Baitap4LaptopItem1Component', () => {
  let component: Baitap4LaptopItem1Component;
  let fixture: ComponentFixture<Baitap4LaptopItem1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4LaptopItem1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4LaptopItem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
