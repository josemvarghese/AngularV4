import { Component, OnInit, OnDestroy } from '@angular/core';
import {Http } from '@angular/http'
@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit, OnDestroy {
    titleName = "videolist";
    someItem1 = "<div> inner HTML</div>";
    someItem2 = "binding text in angular v4";
    todayDate;
    private request:any;
    videoList:[any];
  constructor(private http:Http) { }

  ngOnInit() {
    this.todayDate = new Date();
    this.request = this.http.get('assets/json/videos.json').subscribe(data=>{
      console.log(data.json());
      this.videoList = data.json().vlist;
    })
  }
  ngOnDestroy(){
    this.request.unsubscribe();
  }
  getEmbedUrl(item){
    return  'https://www.youtube.com/embed/'+item.embed;
  }

}
