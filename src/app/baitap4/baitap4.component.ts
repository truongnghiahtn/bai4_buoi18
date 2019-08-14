import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap4',
  templateUrl: './baitap4.component.html',
  styleUrls: ['./baitap4.component.scss']
})
export class Baitap4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  detail:object={TenSP:'',Chitiet:'',hinAnh:'',Gia:''};
  detail_parent(sanpham)
  {
    this.detail=sanpham;
  }

}
