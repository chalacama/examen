import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ItemService } from 'src/app/services/item.service';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { SlicePipe } from '@angular/common';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{
  estado = false;
  id:any;
  array:any;
  filter:any ='';
  img:any;
  constructor(private itemService:ItemService){}

  profileForm = new FormGroup({
    nombre: new FormControl(''),
    tipo: new FormControl(''),
    imagen: new FormControl(''),
    url: new FormControl(''),
  });

  ngOnInit(): void {
  this.index();

  }
  pdf(){
    this.itemService.pdf().subscribe((response:any)=>{
      const blob = new Blob([response],{type:'application/pdf'});
      const url = window.URL.createObjectURL(blob);
      window.open(url);

    },e=>console.log(e))
  }
  index(){
  this.itemService.index().subscribe((data:any)=>{
    this.array = data.items;
    

  })
  }

  store(){
    this.itemService.store(this.profileForm.value).subscribe((data:any)=>{
      this.index();
  })
  }
  edit(dato:any){
    this.id = dato.id;
    this.profileForm.controls['nombre'].setValue(dato.nombre),
    this.profileForm.controls['tipo'].setValue(dato.tipo),
    this.profileForm.controls['imagen'].setValue(dato.imagen),
    this.profileForm.controls['url'].setValue(dato.tipo),
    this.estado = true;
  }
  update(){
    this.itemService.update(this.id,this.profileForm.value).subscribe((data:any)=>{
      this.index();
    })
  }
  save(){
    if(this.estado == true){
      this.update();
      this.estado = false;
    }else{
      this.store();
    }

  }
  delete(id:any){
    this.itemService.delete(id).subscribe((data:any)=>{
      this.index();
    })
  }

  ordenar(){
  this.array = this.array.sort(function (a:any, b:any) {
    if (a.nombre > b.nombre) {
      return 1;
    }
    if (a.nombre < b.nombre) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  }
}
