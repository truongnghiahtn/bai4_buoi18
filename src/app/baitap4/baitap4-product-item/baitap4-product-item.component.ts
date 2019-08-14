import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-baitap4-product-item',
  templateUrl: './baitap4-product-item.component.html',
  styleUrls: ['./baitap4-product-item.component.scss']
})
export class Baitap4ProductItemComponent implements OnInit {
@Input() SanPham;
@Output() eventshow = new EventEmitter();

status:boolean=true;
  constructor() { }

  ngOnInit() {
  }
  showmodal()
  {
  
    this.eventshow.emit(this.SanPham);
  }
  hide(){
    this.status=false;
  }
  show(){
    this.status=true
  }

}
