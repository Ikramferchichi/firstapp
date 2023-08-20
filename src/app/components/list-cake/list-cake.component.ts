import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-list-cake',
  templateUrl: './list-cake.component.html',
  styleUrls: ['./list-cake.component.css']
})
export class ListCakeComponent implements OnInit {
  cakes:any
  constructor(public _shared:SharedService){

  }
  ngOnInit(): void {
    this._shared.getAllcakes()
    .subscribe((rep)=>{
      this.cakes=rep;

    })
  }
  DeleteCake(id:any){
    this._shared.deletecake(id)
    .subscribe(res=>{this.ngOnInit();
    })
  }
}
