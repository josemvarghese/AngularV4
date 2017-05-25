import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* Third party packages */
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

/* End third party packages */

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomeComponent } from './home/home.component';
import { SafePipe } from './utility/safe.pipe';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { SearchComponent } from './search/search.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    HomeComponent,
    VideoListComponent,
    VideoDetailComponent,
    SearchComponent,
    SearchDetailComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
