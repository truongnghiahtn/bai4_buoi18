import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4ProductItemComponent } from './baitap4-product-item.component';

describe('Baitap4ProductItemComponent', () => {
  let component: Baitap4ProductItemComponent;
  let fixture: ComponentFixture<Baitap4ProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4ProductItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4ProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
