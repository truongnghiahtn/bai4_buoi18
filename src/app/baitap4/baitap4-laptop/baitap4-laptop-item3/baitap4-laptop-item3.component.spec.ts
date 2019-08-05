import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4LaptopItem3Component } from './baitap4-laptop-item3.component';

describe('Baitap4LaptopItem3Component', () => {
  let component: Baitap4LaptopItem3Component;
  let fixture: ComponentFixture<Baitap4LaptopItem3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4LaptopItem3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4LaptopItem3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
