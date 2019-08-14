import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-baitap4-laptop',
  templateUrl: './baitap4-laptop.component.html',
  styleUrls: ['./baitap4-laptop.component.scss']
})
export class Baitap4LaptopComponent implements OnInit {
  @Output() eventshow_parent = new EventEmitter();
  manglaptop :any[]=[
    {TenSP:"MACBOOK",Chitiet:"The MacBook is a brand of notebook computers manufactured by Apple Inc",hinhAnh:"assets/img/lt_macbook.png",Gia:"1000"},
    {TenSP:"ASUS ROG",Chitiet:"the Asus ROG Strix Flare is the latest addition to Asus' lineup of ROG branded devices",hinhAnh:"assets/img/lt_rog.png",Gia:"800"},
    {TenSP:"LENOVO THINKPAD",Chitiet:"The ThinkPad X1 Carbon is a high-end notebook computer released by Lenovo in 2012",hinhAnh:"assets/img/lt_lenovo.png ",Gia:"1200"},
    {TenSP:"HP OMEN",Chitiet:"A young global smartphone brand focusing on introducing perfect sound quality",hinhAnh:"assets/img/lt_hp.png",Gia:"700"}
  ]
  constructor() { }

  ngOnInit() {
  }
  detail(sanpham){
    this.eventshow_parent.emit(sanpham);
  }
}
