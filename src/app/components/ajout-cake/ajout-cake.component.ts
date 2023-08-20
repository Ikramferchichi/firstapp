import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ajout-cake',
  templateUrl: './ajout-cake.component.html',
  styleUrls: ['./ajout-cake.component.css']
})
export class AjoutCakeComponent implements OnInit{
   constructor(public _shared:SharedService){

   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  newcake = {
    type:'',
    ingridiens:'',
    imgSrc:''
  };


  addcake(){

this._shared.cakes.push(this.newcake);
this.newcake={
    type:'',
    ingridiens:'',
    imgSrc:''

}
  }
}



