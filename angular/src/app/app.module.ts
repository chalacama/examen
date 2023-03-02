import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { VideoComponent } from './components/video/video.component';
import { MusicaComponent } from './components/musica/musica.component';
import { ItemComponent } from './components/item/item.component';
import { FormsModule } from '@angular/forms';
import { VideoPipe } from './pipes/video.pipe';
@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    MusicaComponent,
    ItemComponent,
    VideoPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
