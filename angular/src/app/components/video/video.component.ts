import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { VideoService } from 'src/app/services/video.service';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent  implements OnInit {
  estado = false;
  id:any;
  youtubes:any;
  filter:any ='';

  constructor(private youtubeService:VideoService){}

  profileForm = new FormGroup({
    nombre: new FormControl(''),
    url: new FormControl(''),
    seguidores: new FormControl(''),
  });

  ngOnInit(): void {
  this.index();

  }

  index(){
  this.youtubeService.index().subscribe((data:any)=>{
    this.youtubes = data.youtubes;
  })
  }

  store(){
    this.youtubeService.store(this.profileForm.value).subscribe((data:any)=>{
      this.index();
  })
  }
  edit(dato:any){
    this.id = dato.id;
    this.profileForm.controls['nombre'].setValue(dato.nombre),
    this.profileForm.controls['url'].setValue(dato.url),
    this.profileForm.controls['seguidores'].setValue(dato.seguidores)
    this.estado = true;
  }
  update(){
    this.youtubeService.update(this.id,this.profileForm.value).subscribe((data:any)=>{
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
    this.youtubeService.delete(id).subscribe((data:any)=>{
      this.index();
    })
  }
  
  ordenar(){
  this.youtubes = this.youtubes.sort(function (a:any, b:any) {
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
