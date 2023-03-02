import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from './components/video/video.component';
import { MusicaComponent } from './components/musica/musica.component';
import { ItemComponent } from './components/item/item.component';
const routes: Routes = [
  { path:'video',component:VideoComponent},
  { path:'musica',component:MusicaComponent},
  { path:'item',component:ItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
