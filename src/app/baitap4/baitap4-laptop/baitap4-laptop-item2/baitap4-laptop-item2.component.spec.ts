import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4LaptopItem2Component } from './baitap4-laptop-item2.component';

describe('Baitap4LaptopItem2Component', () => {
  let component: Baitap4LaptopItem2Component;
  let fixture: ComponentFixture<Baitap4LaptopItem2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4LaptopItem2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4LaptopItem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
