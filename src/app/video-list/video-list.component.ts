import { Component, OnInit, OnDestroy } from '@angular/core';
import { VideoItem } from '../videos/video';
import { VideoService } from '../videos/videos.service';
@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers:[VideoService]
})
export class VideoListComponent implements OnInit, OnDestroy {
    titleName = "videolist";
    someItem1 = "<div> inner HTML</div>";
    someItem2 = "binding text in angular v4";
    todayDate;
    private request:any;
    videoList:[VideoItem];
  constructor(private _vedio:VideoService) { }

  ngOnInit() {
    this.todayDate = new Date();
    this.request = this._vedio.list().subscribe(data=>{
      console.log(data);
      this.videoList = data.vlist as [VideoItem];
    })
  }
  ngOnDestroy(){
    this.request.unsubscribe();
  }
  getEmbedUrl(item){
    return  'https://www.youtube.com/embed/'+item.embed;
  }

}
