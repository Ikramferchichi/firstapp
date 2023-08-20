import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  cakes :any[]=[];
  constructor(private http:HttpClient) { }


  url='http://127.0.0.1:3000/hero/';
  //url+/ajout ===> http://127.0.0.1:3000/cake/ajout
  //ajout cake : endpoint post body 
  create(cake : any){
    return this.http.post(this.url+'ajout',cake)
 }

 //getAllcakes
 getAllcakes(){
   return this.http.get(this.url+'all');
 }

 deletecake(id:any){
   return this.http.delete(this.url+'supprimer/'+id);
 }

 getcakeById(id:any){
  return this.http.get(this.url+'getbyid/'+id);
 }

 updatecake(id:any , cake: any){
   return this.http.put(this.url+'update/'+id,cake);
 }
}
