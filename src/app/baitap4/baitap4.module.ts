import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap4Component } from './baitap4.component';
import { Baitap4HeaderComponent } from './baitap4-header/baitap4-header.component';
import { Baitap4CarouselComponent } from './baitap4-carousel/baitap4-carousel.component';
import { Baitap4SmartphoneComponent } from './baitap4-smartphone/baitap4-smartphone.component';
import { Baitap4SmartphoneItemComponent } from './baitap4-smartphone/baitap4-smartphone-item/baitap4-smartphone-item.component';
import { Baitap4SmartphoneItem1Component } from './baitap4-smartphone/baitap4-smartphone-item1/baitap4-smartphone-item1.component';
import { Baitap4SmartphoneItem2Component } from './baitap4-smartphone/baitap4-smartphone-item2/baitap4-smartphone-item2.component';
import { Baitap4SmartphoneItem3Component } from './baitap4-smartphone/baitap4-smartphone-item3/baitap4-smartphone-item3.component';
import { Baitap4LaptopComponent } from './baitap4-laptop/baitap4-laptop.component';
import { Baitap4LaptopItemComponent } from './baitap4-laptop/baitap4-laptop-item/baitap4-laptop-item.component';
import { Baitap4LaptopItem1Component } from './baitap4-laptop/baitap4-laptop-item1/baitap4-laptop-item1.component';
import { Baitap4LaptopItem2Component } from './baitap4-laptop/baitap4-laptop-item2/baitap4-laptop-item2.component';
import { Baitap4LaptopItem3Component } from './baitap4-laptop/baitap4-laptop-item3/baitap4-laptop-item3.component';
import { Baitap4FooterComponent } from './baitap4-footer/baitap4-footer.component';
import { Baitap4FooterBrandComponent } from './baitap4-footer/baitap4-footer-brand/baitap4-footer-brand.component';




@NgModule({
  declarations: [Baitap4Component, Baitap4HeaderComponent, Baitap4CarouselComponent, Baitap4SmartphoneComponent, Baitap4SmartphoneItemComponent, Baitap4SmartphoneItem1Component, Baitap4SmartphoneItem2Component, Baitap4SmartphoneItem3Component, Baitap4LaptopComponent, Baitap4LaptopItemComponent, Baitap4LaptopItem1Component, Baitap4LaptopItem2Component, Baitap4LaptopItem3Component, Baitap4FooterComponent, Baitap4FooterBrandComponent],
  exports :[Baitap4Component],
  imports: [
    CommonModule
  ]
})
export class Baitap4Module { }
