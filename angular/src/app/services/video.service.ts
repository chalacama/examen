import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VideoService {

  api="http://127.0.0.1:8000/api";
  constructor( private http:HttpClient) { }
  index(){
    return this.http.get(this.api+"/youtube/");
  }
  store(dato:any){
    return this.http.post(this.api+"/youtube/",dato);
  }
  show(id:any){
    return this.http.get(this.api+id);
  }
  update(id:any,dato:any){
    return this.http.put(this.api+"/youtube/"+id,dato);
  }
  delete(id:any){
  return this.http.delete(this.api+"/youtube/"+id);
  }
}
