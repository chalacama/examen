import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  api="http://127.0.0.1:8000/api";
  constructor( private http:HttpClient) { }
  pdf(){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    const options = {headers:headers,responseType:'blob' as 'json'};
    return this.http.get(this.api+"/item/pdf",options);

  }
  index(){
    return this.http.get(this.api+"/item/");
  }
  store(dato:any){
    return this.http.post(this.api+"/item/",dato);
  }
  show(id:any){
    return this.http.get(this.api+id);
  }
  update(id:any,dato:any){
    return this.http.put(this.api+"/item/"+id,dato);
  }
  delete(id:any){
  return this.http.delete(this.api+"/item/"+id);
  }
}
