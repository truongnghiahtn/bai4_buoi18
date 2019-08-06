import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap4Component } from './baitap4.component';
import { Baitap4HeaderComponent } from './baitap4-header/baitap4-header.component';
import { Baitap4CarouselComponent } from './baitap4-carousel/baitap4-carousel.component';
import { Baitap4SmartphoneComponent } from './baitap4-smartphone/baitap4-smartphone.component';

import { Baitap4FooterComponent } from './baitap4-footer/baitap4-footer.component';
import { Baitap4FooterBrandComponent } from './baitap4-footer/baitap4-footer-brand/baitap4-footer-brand.component';
import { Baitap4ProductItemComponent } from './baitap4-product-item/baitap4-product-item.component';
import { Baitap4LaptopComponent } from './baitap4-laptop/baitap4-laptop.component';




@NgModule({
  declarations: [Baitap4Component, Baitap4HeaderComponent, Baitap4CarouselComponent, Baitap4SmartphoneComponent,  Baitap4FooterComponent, Baitap4FooterBrandComponent, Baitap4ProductItemComponent, Baitap4LaptopComponent],
  exports :[Baitap4Component],
  imports: [
    CommonModule
  ]
})
export class Baitap4Module { }
