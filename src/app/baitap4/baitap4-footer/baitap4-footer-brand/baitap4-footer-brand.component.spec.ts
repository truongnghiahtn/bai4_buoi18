import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4FooterBrandComponent } from './baitap4-footer-brand.component';

describe('Baitap4FooterBrandComponent', () => {
  let component: Baitap4FooterBrandComponent;
  let fixture: ComponentFixture<Baitap4FooterBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4FooterBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4FooterBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
