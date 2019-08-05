import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4LaptopItemComponent } from './baitap4-laptop-item.component';

describe('Baitap4LaptopItemComponent', () => {
  let component: Baitap4LaptopItemComponent;
  let fixture: ComponentFixture<Baitap4LaptopItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4LaptopItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4LaptopItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
