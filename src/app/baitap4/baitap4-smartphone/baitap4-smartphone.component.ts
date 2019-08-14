import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-baitap4-smartphone',
  templateUrl: './baitap4-smartphone.component.html',
  styleUrls: ['./baitap4-smartphone.component.scss']
})
export class Baitap4SmartphoneComponent implements OnInit {
  @Output() eventshow_parent = new EventEmitter();
  mangsmartphone :any[]=[
    {TenSP:"IPhoneX",Chitiet:"iPhone X features a new all-screen design. Face ID, which makes your face your password",hinhAnh:"assets/img/sp_iphoneX.png",Gia:"800"},
    {TenSP:"Galaxy Note7",Chitiet:"The Galaxy Note7 comes with a perfectly symmetrical design for good reason",hinhAnh:"assets/img/sp_note7.png",Gia:"900"},
    {TenSP:"Vivo",Chitiet:"A young global smartphone brand focusing on introducing perfect sound quality",hinhAnh:"assets/img/sp_vivo850.png ",Gia:"700"},
    {TenSP:"Blackberry",Chitiet:"BlackBerry is a line of smartphones, tablets, and services originally designed",hinhAnh:"assets/img/sp_blackberry.png",Gia:"1200"}
  ]
  constructor() { }

  ngOnInit() {
  }
  detail(sanpham){
    this.eventshow_parent.emit(sanpham);
  }

}
